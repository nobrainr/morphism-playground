import { Component } from 'react';
import Playground from './Playground';
import { SourceSchemaContext } from './SourceSchemaProvider';
import { MonacoEditorProps } from 'react-monaco-editor';

class InputSource extends Component<MonacoEditorProps> {
  onChange(code, callback) {
    callback(code);
  }

  render() {
    const { ...props } = this.props;
    return (
      <SourceSchemaContext.Consumer>
        {({ source, updateSource }) => (
          <Playground
            height={300}
            value={source}
            language="json"
            onChange={code => this.onChange(code, updateSource)}
            {...props}
          />
        )}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { InputSource };
export default InputSource;
