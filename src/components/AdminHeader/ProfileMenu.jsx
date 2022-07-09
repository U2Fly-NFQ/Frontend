import React from 'react'
import { Menu } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { getLsObj } from '../../utils/localStorage'
import { useNavigate } from 'react-router-dom'

function ProfileMenu() {
  const user = getLsObj('user')
  const navigate = useNavigate()

  return (
    <Menu
      items={[
        {
          key: '1',
          label: user.username,
        },
        {
          key: '2',
          icon: <LogoutOutlined />,
          label: 'Logout',
          onClick: () => {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            navigate('/')
          },
        },
      ]}
    />
  )
}

export default ProfileMenu
