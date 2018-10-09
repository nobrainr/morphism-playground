import { ReactJsonViewProps } from 'react-json-view';
import { Component } from 'react';
import styled from 'styled-components';

interface IJSONViewer {
  json: JSON;
}
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

class JSONViewer extends Component<IJSONViewer & Omit<ReactJsonViewProps, 'src'>> {
  ReactJson: new () => Component<ReactJsonViewProps> = require('react-json-view').default;
  StyledReactJson = styled(this.ReactJson)`
    & .react-json-view {
      padding: 16px 8px;
    }
  `;
  render() {
    const { json, ...props } = this.props;
    return <this.StyledReactJson src={json} {...props} theme="ocean" iconStyle="square" indentWidth={2} collapseStringsAfterLength={60} />;
  }
}
export { JSONViewer };
export default JSONViewer;
