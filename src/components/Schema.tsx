import { Component } from 'react';
import Playground from './Playground';
import { SourceSchemaContext } from './SourceSchemaProvider';

class Schema extends Component<any> {
  constructor(props) {
    super(props);
  }

  onChange(code, callback) {
    callback(code);
  }

  render() {
    return (
      <SourceSchemaContext.Consumer>
        {({ schema, updateSchema }) => <Playground value={schema} onChange={code => this.onChange(code, updateSchema)} />}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Schema };
export default Schema;
