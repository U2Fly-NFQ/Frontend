import React from 'react'
import { Menu } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

function ProfileMenu(props) {
  return (
    <Menu
      items={[
        {
          key: '1',
          label: 'User Name',
        },
        {
          key: '2',
          icon: <LogoutOutlined />,
          label: 'Logout',
        },
      ]}
    />
  )
}

export default ProfileMenu
