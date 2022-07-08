import { Space, Row, Col, Menu, Dropdown } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './style.scss'
import LangSelect from '../LangSelect'
import { getLsObj } from '../../utils/localStorage'

const SubNavBar = () => {
  const { t } = useTranslation()
  const user = getLsObj('user')
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const handleMenuClick = (e) => {
    const value = e.key

    if (value === 'booked') navigate('/profile/booking')
    if (value === 'profile') navigate('/profile')

    if (value === 'logout') {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      navigate(0)
    }
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'My booking',
          key: 'booked',
        },
        {
          label: 'Log out',
          key: 'logout',
        },
      ]}
    />
  )

  return (
    <div className="sub-nav">
      <nav className="grid wide">
        <Row justify="space-between" align="middle" gutter={[2, 2]}>
          <Col md={12} xs={0}>
            <ul className="sub-nav-list">
              <li className="sub-nav-list__item">
                <a href="#">028 6681 2733</a>
              </li>
              <li className="sub-nav-list__item">
                <a href="#">u2fly@nfq.asia</a>
              </li>
            </ul>
          </Col>
          <Col flex="none">
            <ul className="sub-nav-list sub-nav-list-actions">
              {(user.id && (
                <li className="sub-nav-list__item">
                  <Dropdown
                    overlay={menu}
                    onVisibleChange={handleVisibleChange}
                    visible={visible}
                  >
                    <Space style={{ paddingRight: '8px' }}>
                      {user.username || 'career@nfq.asia'}
                      <DownOutlined />
                    </Space>
                  </Dropdown>
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
