import { MonacoEditorProps } from 'react-monaco-editor';
import { Component } from 'react';

class Playground extends Component<MonacoEditorProps> {
  MonacoEditor: new () => Component<MonacoEditorProps> = require('react-monaco-editor').default;

  render() {
    return this.MonacoEditor ? (
      <this.MonacoEditor
        language="javascript"
        theme="vs-dark"
        value=""
        options={{ selectOnLineNumbers: true }}
        onChange={() => null}
        {...this.props}
      />
    ) : null;
  }
}
export { Playground };
export default Playground;
