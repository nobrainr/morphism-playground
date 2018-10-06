declare var window;
window.MonacoEnvironment = { baseUrl: '/monaco-editor-external' };
import { Component } from 'react';
import { morphism } from 'morphism';

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

export { Target };
export default Target;
