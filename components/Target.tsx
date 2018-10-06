import { Component } from 'react';
import { morphism } from 'morphism';
import { SourceSchemaContext } from './SourceSchemaProvider';
import Playground from './Playground';

class Target extends Component<any> {
  render() {
    let targetResult = null;
    return (
      <SourceSchemaContext.Consumer>
        {({ source, schema }) => {
          try {
            console.log('debug:: receive', source, schema.toString());

            const sourceObject = JSON.parse(source);
            console.log('debug:: parsed source', sourceObject);

            const schemaObject = eval(`(()=>(${schema}))()`);
            console.log('debug:: parsed schema', schemaObject);

            targetResult = morphism(schemaObject, sourceObject);
            console.log('debug:: parsed schema', schemaObject);
          } catch (e) {
            console.log('debug:: catching something', e.message);
          }
          return targetResult ? <Playground value={JSON.stringify(targetResult, null, 2)} language="json" /> : null;
        }}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Target };
export default Target;
