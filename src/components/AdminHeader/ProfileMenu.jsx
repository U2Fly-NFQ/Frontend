import React, { useState } from 'react'
import { Menu, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { getLsObj } from '../../utils/localStorage'
import { useNavigate } from 'react-router-dom'

function ProfileMenu() {
  const user = getLsObj('user')
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const handleMenuClick = (e) => {
    const value = e.key

    if (value === 'logout') {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      navigate('/')
    }
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Log out',
          key: 'logout',
        },
      ]}
    />
  )

  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
    >
      <Space style={{ color: 'white' }}>
        {user.username || 'career@nfq.asia'}
        <DownOutlined />
      </Space>
    </Dropdown>
  )
}

export default ProfileMenu
