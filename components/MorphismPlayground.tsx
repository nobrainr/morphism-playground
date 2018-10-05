declare var window;
window.MonacoEnvironment = { baseUrl: '/monaco-editor-external' };

import * as monaco from '@timkendrick/monaco-editor/dist/external';
import { Component } from 'react';
import { morphism } from 'morphism';
import MonacoEditor from 'react-monaco-editor';

const source = {
  a: 'value',
  b: 'bvalue'
};
const schema = {
  foo: 'a',
  bar: 'b',
  test: () => 'test'
};
export class MorphismViz extends Component {
  render() {
    return (
      <>
        <InputSource data={source} />
        <Schema data={schema} />
        <Target source={source} schema={schema} />
      </>
    );
  }
}

export default MorphismViz;

class InputSource extends Component<any> {
  render() {
    const { data } = this.props;
    return (
      <section>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    );
  }
}

class Schema extends Component<any> {
  state = {
    code: ''
  };
  editorDidMount(editor) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    console.log('monaco', monaco);
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={(newVal, e) => this.onChange(newVal, e)}
        editorDidMount={editor => this.editorDidMount(editor)}
      />
    );
  }
}

class Target extends Component<any> {
  render() {
    const { source, schema } = this.props;
    let result = null;
    try {
      result = morphism(schema, source);
    } catch (e) {}
    return (
      <section>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </section>
    );
  }
}
