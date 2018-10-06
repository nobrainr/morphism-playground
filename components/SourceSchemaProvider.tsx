import React, { Component } from 'react';
import { Schema } from 'morphism';

interface SourceSchemaContext {
  updateSource?: (source) => void;
  updateSchema?: <T>(schema: Schema<T>) => void;
}

interface ProviderProps {
  source?: string;
  schema?: string;
}

export const SourceSchemaContext = React.createContext<SourceSchemaContext & ProviderProps>({});
export class SourceSchemaProvider extends Component<ProviderProps> {
  state = {
    source: JSON.stringify(
      {
        bar: 'value'
      },
      null,
      2
    ),
    schema: `{
  foo: 'bar'
}
    `
  };
  render() {
    return (
      <SourceSchemaContext.Provider
        value={{
          source: this.state.source,
          schema: this.state.schema,
          updateSource: source => this.setState({ source }),
          updateSchema: schema => this.setState({ schema })
        }}
      >
        {this.props.children}
      </SourceSchemaContext.Provider>
    );
  }
}

export default { SourceSchemaContext, SourceSchemaProvider };
