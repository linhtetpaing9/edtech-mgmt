import React from 'react'
import App from 'next/app'
import { loadGetInitialProps } from 'next-server/dist/lib/utils'
import WrappedLayout from '../components/layouts/WrappedLayout'
import * as NProgress from 'nprogress/nprogress'
import Router from 'next/router'
import '../styles/index.less'
import configureStore from '../store/configureStore'
import { projectAdded } from '../store/projects'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const store = configureStore();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = await loadGetInitialProps(Component, ctx)
    return { pageProps }
  }

  render() {
    store.dispatch(projectAdded({ name: 'project 1'}))

    const { Component, pageProps } = this.props
    return (
      <WrappedLayout>
        <Component {...pageProps} />
      </WrappedLayout>
    )
  }
}

export default MyApp