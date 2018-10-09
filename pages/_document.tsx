import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import styled from 'styled-components';
import { ThemeProvider } from '@rmwc/theme';
import { theme } from '../src/styles/theme';

const StyledAppHtml = styled.html`
  &,
  & > body,
  #__next {
    display: flex;
    flex-direction: column;
    margin: 0px;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <StyledAppHtml>
        <Head>{this.props.styleTags}</Head>
        <body>
          <ThemeProvider options={theme}>
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </StyledAppHtml>
    );
  }
}
