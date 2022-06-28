import { Row, Col, Typography } from 'antd'
import { LoginBanner } from '../../components'
import './style.scss'

const { Title } = Typography

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <div className="login-page">
        <LoginBanner />
        <div className="grid wide">
          <Row justify="center">
            <Col lg={16}>
              <div className="login-page-content">
                <div className="login-page-box">
                  <Title level={3}>Welcome back</Title>
                  <Title level={2}>Logged in to stay in touch</Title>
                  <form action="#" className="login-form">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter user name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter password"
                      />
                      <a href="forgot-password.html">Forgot password?</a>
                    </div>
                    <div class="form-submit">
                      <button class="btn btn-primary btn-md">Log in</button>
                    </div>
                    <div class="have-account">
                      <p>
                        Dont have an account?{' '}
                        <a href="register.html">Register now</a>
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

export default Login
