import dynamic from 'next/dynamic';
import { MonacoEditorProps } from 'react-monaco-editor';
import { Component } from 'react';

class Playground extends Component<MonacoEditorProps> {
  MonacoEditor = dynamic<MonacoEditorProps, MonacoEditorProps>(import('react-monaco-editor') as any, { ssr: false });

  render() {
    return this.MonacoEditor ? (
      <this.MonacoEditor
        width={475}
        height={600}
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
