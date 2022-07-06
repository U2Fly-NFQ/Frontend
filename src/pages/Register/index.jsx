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
import { Link } from 'react-router-dom'
import RegisterBanner from './RegisterBanner'
import axios from 'axios'
import './style.scss'

const { Title } = Typography

const MOCK_URL = 'https://62bb0d28573ca8f83291bd89.mockapi.io/api/register'

const registerApi = (data) => axios.post(MOCK_URL, data)

const postData = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    body: JSON.stringify(data),
  })

  console.log(data)
}

const Register = () => {
  const onFinish = (values) => {
    const { idno, name, gender, birthDate, address, email, password } = values

    const data = {
      user: {
        email: email,
        password: password,
      },
      passenger: {
        name: name,
        gender: gender === 'male',
        birthday: birthDate.toISOString(),
        address: address,
        identification: idno,
      },
    }

    const res = registerApi(JSON.stringify(data))

    console.log(res)
    res.then((data) => {
      if (data.status === 201) {
        message.success('Register successful!')
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
            <Col lg={16}>
              <div className="content">
                <div className="box">
                  <Title level={3}>To join a whole new world</Title>
                  <Title level={2}>Register your account</Title>
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
                        name="birthDate"
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
                        ]}
                      >
                        <Input.Password placeholder="Confirm password" />
                      </Form.Item>
                    </div>
                    <div className="form-submit">
                      <Button type="submit" className="btn btn-primary btn-md">
                        Register
                      </Button>
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
