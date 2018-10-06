import { Component } from 'react';
import Playground from './Playground';
import { SourceSchemaContext } from './SourceSchemaProvider';
import { flatMap } from 'lodash';

class Schema extends Component<any> {
  monaco: any;
  constructor(props) {
    super(props);
  }

  onChange(code, callback) {
    try {
      const tokens = this.monaco.editor.tokenize(code, 'javascript');
      // flatMap(tokens);
      console.log('debug:: tokens', flatMap(tokens).map());
    } catch (error) {
      console.log('debugg', error);
    }

    callback(code);
  }
  editorWillMount(monaco) {
    this.monaco = monaco;
  }
  render() {
    return (
      <SourceSchemaContext.Consumer>
        {({ schema, updateSchema }) => (
          <Playground
            value={schema}
            onChange={code => this.onChange(code, updateSchema)}
            editorWillMount={monaco => this.editorWillMount(monaco)}
          />
        )}
      </SourceSchemaContext.Consumer>
    );
  }
}

export { Schema };
export default Schema;
