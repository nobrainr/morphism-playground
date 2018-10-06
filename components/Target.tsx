import { Component } from 'react';
// import { morphism } from 'morphism';
import { SourceSchemaContext } from './SourceSchemaProvider';
import Playground from './Playground';

class Target extends Component<any> {
  render() {
    return (
      <SourceSchemaContext.Consumer>
        {({ result }) => {
          return result ? <Playground value={JSON.stringify(result, null, 2)} language="json" /> : null;
        }}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Target };
export default Target;
