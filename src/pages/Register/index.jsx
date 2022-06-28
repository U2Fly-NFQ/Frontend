import { Row, Col, Typography } from 'antd'
import { LoginBanner } from '../../components'
import './style.scss'

const { Title } = Typography

const Register = () => {
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
                  <Title level={3}>To join a whole new world</Title>
                  <Title level={2}>Register your account</Title>
                  <form action="#" className="form">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your mail"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your phone"
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
                      <button class="btn btn-primary btn-md">Register</button>
                    </div>
                    <div class="switch">
                      <p>
                        Dont have an account?{' '}
                        <a href="register.html">Login now</a>
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
