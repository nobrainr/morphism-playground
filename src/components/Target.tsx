import { Component } from 'react';
// import { morphism } from 'morphism';
import { SourceSchemaContext } from './SourceSchemaProvider';
// import Playground from './Playground';
import { JSONViewer } from './';
class Target extends Component<any> {
  render() {
    return (
      <SourceSchemaContext.Consumer>
        {({ result }) => {
          return result ? <JSONViewer json={result} /> : null;
        }}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Target };
export default Target;
