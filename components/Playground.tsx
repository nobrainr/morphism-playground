declare var window;
window.MonacoEnvironment = { baseUrl: '/monaco-editor-external' };
import '@timkendrick/monaco-editor/dist/external';
import MonacoEditor from 'react-monaco-editor';
import '../node_modules/@timkendrick/monaco-editor/dist/external/monaco.css';

export default props => (
  <MonacoEditor
    width={550}
    height={600}
    language="javascript"
    theme="vs-dark"
    value=""
    options={{ selectOnLineNumbers: true }}
    onChange={() => null}
    editorDidMount={() => null}
    {...props}
  />
);
