import { Row, Col, Select } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import './style.scss'
import LangSelect from '../LangSelect'

const { Option } = Select

const SubNavBar = () => {
  const { t } = useTranslation()
  const user = JSON.parse(localStorage.getItem('user') || '[]')
  const navigate = useNavigate()

  return (
    <div className="sub-nav">
      <nav className="grid wide">
        <Row justify="space-between" align="middle" gutter={[2, 2]}>
          <Col md={12} xs={0}>
            <ul className="sub-nav-list">
              <li className="sub-nav-list__item">
                <a href="#">
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="sub-nav-list__item">028 6681 2733</li>
              <li className="sub-nav-list__item">career@nfq.asia</li>
            </ul>
          </Col>
          <Col flex="none">
            <ul className="sub-nav-list sub-nav-list-actions">
              {(user.id && (
                <li className="sub-nav-list__item">
                  <Select
                    className="lang-select"
                    size="small"
                    suffixIcon={
                      <DownOutlined
                        style={{
                          color: '#fff',
                        }}
                      />
                    }
                    defaultValue={user.username || 'u2fly@nfq.asia'}
                    onChange={(value) => {
                      if (value === 'booked') navigate('/user/booked')
                      if (value === 'profile') navigate('/user/booked')
                      if (value === 'logout') {
                        localStorage.removeItem('user')
                        localStorage.removeItem('token')
                        navigate('/flights')
                      }
                    }}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9 }),
                    }}
                  >
                    <Option key={'profile'}>Profile</Option>
                    <Option key={'booked'}>My Bookings</Option>
                    <Option key={'logout'}>Log out</Option>
                  </Select>
                </li>
              )) || (
                <>
                  <li className="sub-nav-list__item">
                    <NavLink to={'/login'}>{t('cta.login')}</NavLink>
                  </li>
                  <li className="sub-nav-list__item">
                    <NavLink to={'/register'}>{t('cta.register')}</NavLink>
                  </li>
                </>
              )}
              <li className="sub-nav-list__item">
                <LangSelect />
              </li>
            </ul>
          </Col>
        </Row>
      </nav>
    </div>
  )
}

export default SubNavBar
