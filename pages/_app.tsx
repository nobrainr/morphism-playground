import React from 'react';
import App, { Container } from 'next/app';

import '../src/styles/material-styles.scss';
import { TopBar } from '../src/components';
import '../node_modules/normalize.css/normalize.css';

class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <TopBar />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
