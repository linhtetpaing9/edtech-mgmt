import React from 'react'
import { Menu } from 'antd'
import Link from 'next/link'

const NavigationBar = ({ Router }) => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[Router.pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/custom">
        <Link href="/custom">
          <a>Custom Component</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/functions">
        <Link href="/functions">
          <a>Functions</a>
        </Link>
      </Menu.Item>
    
    </Menu>
  )
}
export default NavigationBar;