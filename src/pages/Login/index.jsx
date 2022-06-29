import { Row, Col, Typography, Form } from 'antd'
import { login } from '../../redux/slices'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { LoginBanner } from '../../components'
import './style.scss'
import { useEffect } from 'react'

const { Title } = Typography

const Login = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.login)
  const idLoggedIn = !!userData.id
  const navigate = useNavigate()

  useEffect(() => {
    if (idLoggedIn) {
      // admin
      if (userData.roles.includes('3')) {
        navigate('/admin')
      }

      // partner
      if (userData.roles.includes('2')) {
        navigate('/partner')
      }

      // user
      if (userData.roles.includes('1')) {
        navigate('/flights')
      }
    }
  }, [])

  const onFinish = (values) => {
    dispatch(login(values))
  }

  const passwordValidator = (rule, value, callback) => {
    if (!value) callback('Please input your password')
    if (value.length < 3) callback('Password must be at least 6 characters')
    callback()
  }

  return (
    <>
      <div className="login-page">
        <LoginBanner />
        <div className="grid wide">
          <Row justify="center">
            <Col lg={16}>
              <div className="content">
                <div className="box">
                  <Title level={3}>Welcome back</Title>
                  <Title level={2}>Logged in to stay in touch</Title>
                  <Form className="form" name="login-form" onFinish={onFinish}>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email!',
                        },
                        {
                          type: 'email',
                          message: 'Email is not valid',
                        },
                      ]}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[{ validator: passwordValidator }]}
                    >
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <div className="form-submit">
                        <button className="btn btn-primary btn-md">
                          Log in
                        </button>
                      </div>
                    </Form.Item>
                    <div className="switch">
                      <p>
                        Dont have an account?{' '}
                        <a href="register.html">Register now</a>
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
