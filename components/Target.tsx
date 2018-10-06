import { Component } from 'react';
import { morphism } from 'morphism';
import { SourceSchemaContext } from './SourceSchemaProvider';
import Playground from './Playground';

class Target extends Component<any> {
  render() {
    return (
      <SourceSchemaContext.Consumer>
        {({ source, schema }) => {
          let result;
          try {
            console.log('debug:: receive', source, schema.toString());

            const sourceObject = JSON.parse(source);
            console.log('debug:: parsed source', sourceObject);

            const schemaObject = eval(`(()=>(${schema}))()`);
            console.log('debug:: parsed schema', schemaObject);

            result = morphism(schemaObject, sourceObject);
            console.log('debug:: parsed schema', schemaObject);
          } catch (e) {
            console.log('debug:: catching something', e.message);
          }
          return result ? <Playground value={result.toString()} /> : null;
          // <section>
          //   <pre>{JSON.stringify(result, null, 2)}</pre>
          // </section>
        }}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Target };
export default Target;
