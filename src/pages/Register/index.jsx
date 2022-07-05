import { Row, Col, Typography, Form, message } from 'antd'
import { Link } from 'react-router-dom'
import { LoginBanner } from '../../components'

import './style.scss'

const { Title } = Typography

const Register = () => {
  const onFinish = (values) => {
    console.log(values)
    message.success('Register successful!')
  }

  /* eslint-enable no-template-curly-in-string */

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
                  <Form className="form" onFinish={onFinish} autoComplete="off">
                    <div className="form-group">
                      <Form.Item
                        name="email"
                        className="form-control"
                        rules={[
                          {
                            required: true,
                            message: 'Please fill your email',
                          },
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                        ]}
                      >
                        <input type="text" placeholder="Email" />
                      </Form.Item>
                    </div>
                    <div className="form-group">
                      <Form.Item
                        name="username"
                        className="form-control"
                        rules={[
                          {
                            required: true,
                            message: 'Please fill your name!',
                          },
                        ]}
                      >
                        <input type="text" placeholder="Name" />
                      </Form.Item>
                    </div>

                    <div className="form-group">
                      <Form.Item
                        name="password"
                        className="form-control"
                        rules={[
                          {
                            required: true,
                            message: 'Please fill your password!',
                          },
                        ]}
                      >
                        <input type="password" placeholder="Password" />
                      </Form.Item>
                    </div>
                    <div className="form-group">
                      <Form.Item
                        className="form-control"
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please confirm your password!',
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue('password') === value
                              ) {
                                return Promise.resolve()
                              }

                              return Promise.reject(
                                new Error('The password do not match!')
                              )
                            },
                          }),
                        ]}
                      >
                        <input type="password" placeholder="Confirm password" />
                      </Form.Item>
                      <Link to="forgot-password">Forgot password?</Link>
                    </div>
                    <div className="form-submit">
                      <button type="submit" className="btn btn-primary btn-md">
                        Register
                      </button>
                    </div>
                    <div className="switch">
                      <p>
                        Dont have an account? <Link to="/login">Login now</Link>
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

export default Register
