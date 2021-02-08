import React, { useEffect } from 'react'
import AOS from 'aos';
import Head from 'next/head'
import MetaTag from '../MetaTag'
import NavBar from '../NavigationBar'
import { useRouter } from 'next/router'
import { Layout } from 'antd';

const { Header ,Content } = Layout;

const WrappedLayout = ({ children }) => {
  const Router = useRouter();
  useEffect(() => {
    AOS.init();
  });

  return (

    <>
      <Head>
        <MetaTag title={Router.pathname}/>
      </Head>
      <Layout className="layout">
        <Header>
          <NavBar Router={Router}/>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {children}
        </Content>
      </Layout>
    </>
  );
}
export default WrappedLayout;