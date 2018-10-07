import React, { Component } from 'react';
import { Schema, morphism } from 'morphism';

interface SourceSchemaContext {
  updateSource?: (source) => void;
  updateSchema?: <T>(schema: Schema<T>) => void;
}

interface ProviderProps {
  source?: string;
  schema?: string;
  result?: JSON;
}

export const SourceSchemaContext = React.createContext<SourceSchemaContext & ProviderProps>({});
export class SourceSchemaProvider extends Component<ProviderProps & SourceSchemaContext> {
  state = {
    source: JSON.stringify(DEFAULT_SOURCE, null, 2),
    schema: `const schema = {
  id: 'id',
  date: 'created_at',
  action: 'type',
  url: ({ repo }) => \`https://github.com/\${repo.name}\`,
  description: ({ actor, type, payload, repo }) =>
    \`\${actor.display_login} \${payload.action ? \`\${payload.action} \` : ''}\${type} on \${repo.name}\`
}`,
    result: null
  };
  updateSource(source) {
    this.setState({ source });
    this.updateResult();
  }
  updateSchema(schema) {
    this.setState({ schema });
    this.updateResult();
  }
  componentDidMount() {
    this.updateResult();
  }
  updateResult() {
    try {
      if (!this.state.schema.includes('const schema') && !this.state.schema.includes('let schema')) {
        throw new Error('You should set your schema to a variable called schema => const schema = {}');
      }
      const sourceObject = JSON.parse(this.state.source);
      const schemaObject = eval(`(()=>{ 
        ${this.state.schema}; 
        return schema 
      })()`);

      const result = morphism(schemaObject, sourceObject);
      this.setState({ result });
    } catch (e) {
      console.error('Something went wrong', e.message);
    }
  }
  render() {
    return (
      <SourceSchemaContext.Provider
        value={{
          source: this.state.source,
          schema: this.state.schema,
          result: this.state.result,
          updateSource: source => this.updateSource(source),
          updateSchema: schema => this.updateSchema(schema)
        }}
      >
        {this.props.children}
      </SourceSchemaContext.Provider>
    );
  }
}

export default { SourceSchemaContext, SourceSchemaProvider };

const DEFAULT_SOURCE = [
  {
    id: '8377954257',
    type: 'PushEvent',
    actor: {
      id: 4748419,
      login: 'emyann',
      display_login: 'emyann',
      gravatar_id: '',
      url: 'https://api.github.com/users/emyann',
      avatar_url: 'https://avatars.githubusercontent.com/u/4748419?'
    },
    repo: {
      id: 151787964,
      name: 'nobrainr/morphism-playground',
      url: 'https://api.github.com/repos/nobrainr/morphism-playground'
    },
    payload: {
      push_id: 2936659283,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/feat/use-morphism-from-playground',
      head: 'c6a79efc8760f1ce9010a646b25d73fbdb9b7c0b',
      before: '78a27069cee45da887568d58693871b3893cd8e8',
      commits: [
        {
          sha: 'c6a79efc8760f1ce9010a646b25d73fbdb9b7c0b',
          author: {
            email: 'renaudin.yann@gmail.com',
            name: 'Yann Renaudin'
          },
          message: 'feat: Working playground 👌🏽',
          distinct: true,
          url: 'https://api.github.com/repos/nobrainr/morphism-playground/commits/c6a79efc8760f1ce9010a646b25d73fbdb9b7c0b'
        }
      ]
    },
    public: true,
    created_at: '2018-10-06T08:19:25Z',
    org: {
      id: 38895741,
      login: 'nobrainr',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nobrainr',
      avatar_url: 'https://avatars.githubusercontent.com/u/38895741?'
    }
  }
];
