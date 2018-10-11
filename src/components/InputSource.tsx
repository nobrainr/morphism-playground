import { Component } from 'react';
import Playground from './Playground';
import { SourceSchemaContext } from './SourceSchemaProvider';
class InputSource extends Component<any> {
  monaco: any;
  constructor(props) {
    super(props);
  }

  onChange(code, callback) {
    callback(code);
  }
  render() {
    return (
      <SourceSchemaContext.Consumer>
        {({ source, updateSource }) => <Playground value={source} language="json" onChange={code => this.onChange(code, updateSource)} />}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { InputSource };
export default InputSource;
