import { Row, Col, Typography } from 'antd'
import { LoginBanner } from '../../components'
import './style.scss'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Register = () => {
  const { t } = useTranslation()

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <div className="register-page">
        <LoginBanner />
        <div className="grid wide">
          <Row justify="center">
            <Col lg={16}>
              <div className="content">
                <div className="box">
                  <Title level={3}>
                    {t('register.To join a whole new world')}
                  </Title>
                  <Title level={2}>{t('register.Register your account')}</Title>
                  <form action="#" className="form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t('register.Enter your name')}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t('register.Enter your email')}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t('register.Enter your phone')}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder={t('register.Enter password')}
                      />
                    </div>
                    <div className="form-submit">
                      <button className="btn btn-primary btn-md">
                        {t('register.Register')}
                      </button>
                    </div>
                    <div className="switch">
                      <p>
                        {t('register.Already have an account?')}{' '}
                        <a href="register.html">{t('register.Login now')}</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Register
