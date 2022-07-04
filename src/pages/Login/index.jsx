import { Row, Col, Typography, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../api/Auth'
import { LoginBanner, PageLoadingAnimation } from '../../components'
import './style.scss'
import { useEffect, useState } from 'react'
import axiosInstance from '../../api'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Login = () => {
  const user = JSON.parse(localStorage.getItem('user') || '[]')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (user.id) {
      // admin
      if (user.roles['2']) {
        navigate('/admin')
      }

      // user
      if (user.roles['1']) {
        navigate('/flights')
      }
    }
  }, [user.id])

  const onFinish = async (values) => {
    setIsLoading(true)
    const { data } = await loginApi(values)
    localStorage.setItem('user', JSON.stringify(data.user))

    // Update token, loading animation
    axiosInstance.setToken(data.token)
    setIsLoading(false)
  }

  return (
    <>
      {isLoading === true && <PageLoadingAnimation />}
      <div className="login-page">
        <LoginBanner />
        <div className="grid wide">
          <Row justify="center">
            <Col lg={16}>
              <div className="content">
                <div className="box">
                  <Title level={3}>{t('login.Welcome back')}</Title>
                  <Title level={2}>
                    {t('login.Logged in to stay in touch')}
                  </Title>
                  <Form className="form" name="login-form" onFinish={onFinish}>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: t('login.Please input your email!'),
                        },
                        {
                          type: 'email',
                          message: t('login.Email is not valid'),
                        },
                      ]}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t('login.Enter your email')}
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: t('login.Please input your password'),
                        },
                      ]}
                    >
                      <input
                        type="password"
                        className="form-control"
                        placeholder={t('login.Enter password')}
                      />
                    </Form.Item>
                    <div className="form-submit">
                      <button className="btn btn-primary btn-md">
                        {t('login.Login')}
                      </button>
                    </div>
                    <div className="switch">
                      <p>
                        {t("login.Don't have an account?")}{' '}
                        <a href="register.html">{t('login.Register now')}</a>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Login
