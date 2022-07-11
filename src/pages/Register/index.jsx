import {
  Row,
  Col,
  Typography,
  Form,
  message,
  Radio,
  Input,
  DatePicker,
} from 'antd'
import { Button } from './Button'
import { Link, useNavigate } from 'react-router-dom'
import RegisterBanner from './RegisterBanner'
import './style.scss'
import { registerApi } from '../../api/Auth'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { scrollTo } from '../../utils/scroll'

const { Title } = Typography

const Register = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    scrollTo(0)
  }, [])

  const onFinish = (values) => {
    const { idno, name, gender, birthday, address, email, password } = values

    const data = {
      user: {
        email,
        password,
        roles: {
          1: 'ROLE_USER',
        },
      },
      passenger: {
        gender,
        birthday,
        address,
        name,
        identification: idno,
      },
    }
    // console.log(JSON.stringify(data))

    const res = registerApi(JSON.stringify(data))

    res.then((result) => {
      if (result.data.status === 'success') {
        message.success('Register successful!')
        navigate('/login')
      }
    })
  }

  /* eslint-enable no-template-curly-in-string */

  return (
    <>
      <div className="register-page">
        <RegisterBanner />
        <div className="grid wide">
          <Row justify="center">
            <Col md={16} xs={22}>
              <div className="content">
                <div className="box">
                  <Title level={2}>{t('cta.register')}</Title>
                  <Form className="form" onFinish={onFinish} autoComplete="off">
                    <div className="form-group">
                      <Form.Item
                        name="idno"
                        className="form-control"
                        rules={[
                          {
                            required: true,
                            message: 'Please fill your ID number!',
                          },
                          {
                            max: 20,
                            message: 'Your ID not be longer than 20 characters',
                          },
                          () => ({
                            validator(_, value) {
                              if (!value) {
                                return Promise.reject()
                              }
                              if (isNaN(value)) {
                                return Promise.reject('ID must be a number.')
                              }
                              return Promise.resolve()
                            },
                          }),
                        ]}
                      >
                        <Input placeholder="ID number" />
                      </Form.Item>
                    </div>

                    <div className="form-group">
                      <Form.Item
                        name="name"
                        className="form-control"
                        rules={[
                          {
                            required: true,
                            message: 'Please fill your display name!',
                          },
                          {
                            max: 20,
                            message:
                              'Your name must not be longer than 20 characters',
                          },
                        ]}
                      >
                        <Input placeholder="Display name" />
                      </Form.Item>
                    </div>

                    <div className="form-group">
                      <Form.Item
                        name="gender"
                        label="Gender"
                        style={{ textAlign: 'left' }}
                        rules={[
                          {
                            required: true,
                            message: 'Please pick a gender!',
                          },
                        ]}
                      >
                        <Radio.Group>
                          <Radio value="male"> Male </Radio>
                          <Radio value="female"> Female </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>

                    <div className="form-group">
                      <Form.Item
                        name="birthday"
                        label="Birth Date"
                        style={{ textAlign: 'left' }}
                        rules={[
                          {
                            required: true,
                            message: 'Please pick the birth date!',
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>
                    </div>

                    <div className="form-group">
                      <Form.Item
                        name="address"
                        className="form-control"
                        rules={[
                          {
                            required: true,
                            message: 'Please fill your address',
                          },
                          {
                            max: 40,
                          },
                        ]}
                      >
                        <Input placeholder="Address" />
                      </Form.Item>
                    </div>

                    <div className="form-group">
                      <Form.Item
                        name="email"
                        className="form-control"
                        rules={[
                          {
                            required: true,
                            message: 'Please fill your email!',
                          },
                          {
                            type: 'email',
                            message: 'Invalid E-mail!',
                          },
                        ]}
                      >
                        <Input placeholder="Email" />
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
                          {
                            min: 8,
                            message: 'password must be at least 8 characters',
                          },
                        ]}
                      >
                        <Input.Password placeholder="Password" />
                      </Form.Item>
                    </div>

                    <div className="form-group">
                      <Form.Item
                        className="form-control"
                        name="confirm"
                        dependencies={['password']}
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
                          {
                            min: 8,
                            message: 'password must be at least 8 characters',
                          },
                          {
                            max: 20,
                            message:
                              'password must not be longer than 20 characters',
                          },
                        ]}
                      >
                        <Input.Password placeholder="Confirm password" />
                      </Form.Item>
                    </div>
                    <div className="form-submit" style={{ marginTop: '30px' }}>
                      <Button type="submit" className="btn btn-primary btn-md">
                        Register
                      </Button>
                    </div>
                    <div className="switch">
                      <p>
                        {t('register.Already have an account?')}{' '}
                        <Link to="/login">{t('register.Login now')}</Link>
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
