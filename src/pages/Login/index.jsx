import { Row, Col, Typography, Form } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../../api/Auth'
import { LoginBanner, PageLoadingAnimation } from '../../components'
import './style.scss'
import { useEffect, useState } from 'react'
import axiosInstance from '../../api'
import { useTranslation } from 'react-i18next'
import { getLsObj, updateLs } from '../../utils/localStorage'
import { scrollTo } from '../../utils/scroll'

const { Title } = Typography

const Login = () => {
  const user = getLsObj('user')
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    scrollTo(0)

    if (token && Object.values(user.roles).indexOf('ROLE_USER') !== -1 > -1)
      navigate(-1)
  }, [isLoading])

  const [errTxt, setErrTxt] = useState('')

  const onFinish = async (values) => {
    setIsLoading(true)
    try {
      const { data } = await loginApi(values)
      updateLs('user', data.user)
      axiosInstance.setToken(data.token)
      // Navigate to previous page
    } catch (error) {
      setErrTxt('Wrong email or password')
    }
    setIsLoading(false)
  }

  return (
    <>
      {isLoading === true && <PageLoadingAnimation />}
      <div className="login-page">
        <LoginBanner />
        <div className="grid wide">
          <Row justify="center">
            <Col lg={16} xs={22}>
              <div className="content">
                <div className="box">
                  <Title level={2}>Login</Title>
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
                    {errTxt && (
                      <p
                        style={{
                          textAlign: 'right',
                          color: 'var(--ant-error-color)',
                        }}
                      >
                        Wrong email or password
                      </p>
                    )}
                    <div className="form-submit">
                      <button className="btn btn-primary btn-md">
                        {t('login.Login')}
                      </button>
                    </div>
                    <div className="switch">
                      <p>
                        Dont have an account?{' '}
                        <Link to="/register">Register now</Link>
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
