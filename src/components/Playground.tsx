import { MonacoEditorProps } from 'react-monaco-editor';
import { Component } from 'react';

class Playground extends Component<MonacoEditorProps> {
  MonacoEditor: new () => Component<MonacoEditorProps> = require('react-monaco-editor').default;

  render() {
    return this.MonacoEditor ? (
      <this.MonacoEditor
        width={'100%'}
        height={400}
        language="javascript"
        theme="vs-dark"
        value=""
        options={{ selectOnLineNumbers: true }}
        onChange={() => null}
        editorDidMount={() => null}
        {...this.props}
      />
    ) : null;
  }
}
export { Playground };
export default Playground;
