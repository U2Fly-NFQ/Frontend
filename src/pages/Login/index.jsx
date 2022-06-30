import { Row, Col, Typography } from 'antd'
import { LoginBanner } from '../../components'
import './style.scss'

const { Title } = Typography

const Login = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.login)
  const isLoggedIn = !!userData.id
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      // admin
      if (userData.roles.includes('3')) {
        navigate('/admin')
      }

      // user
      if (userData.roles.includes('1')) {
        navigate('/flights')
      }
    }
  }, [isLoggedIn])

  
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
              <div className="content">
                <div className="box">
                  <Title level={3}>Welcome back</Title>
                  <Title level={2}>Logged in to stay in touch</Title>
                  <form action="#" className="form">
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
                    <div class="switch">
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
