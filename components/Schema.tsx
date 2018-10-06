import { Component } from 'react';
import Playground from './Playground';

class Schema extends Component<any> {
  state = {
    code: ''
  };

  onChange(code) {
    this.setState({ code });
  }
  render() {
    const code = this.state.code;
    return <Playground value={code} onChange={code => this.onChange(code)} />;
  }
}

export { Schema };
export default Schema;
