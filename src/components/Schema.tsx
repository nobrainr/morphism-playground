import { Component } from 'react';
import Playground from './Playground';
import { SourceSchemaContext } from './SourceSchemaProvider';
import { MonacoEditorProps } from 'react-monaco-editor';

class Schema extends Component<MonacoEditorProps> {
  onChange(code, callback) {
    callback(code);
  }
  render() {
    const { ...props } = this.props;

    return (
      <SourceSchemaContext.Consumer>
        {({ schema, updateSchema }) => (
          <Playground
            value={schema}
            height={300}
            options={{ minimap: { enabled: false } }}
            onChange={code => this.onChange(code, updateSchema)}
            {...props}
          />
        )}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Schema };
export default Schema;
