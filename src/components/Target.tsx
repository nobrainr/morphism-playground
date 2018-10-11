import { Component } from 'react';
import { SourceSchemaContext } from './SourceSchemaProvider';
import { JSONViewer } from './';

import styled from 'styled-components';

const StyledJSONViewer = styled.div`
  height: 100%;

  & .react-json-view {
    overflow: auto;
    padding: 15px 30px;
    height: 100%;
  }
`;
class Target extends Component<any> {
  render() {
    return (
      <SourceSchemaContext.Consumer>
        {({ result }) => {
          return result ? (
            <StyledJSONViewer>
              <JSONViewer json={result} />
            </StyledJSONViewer>
          ) : null;
        }}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Target };
export default Target;
