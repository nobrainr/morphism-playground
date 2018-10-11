import React, { Component } from 'react';
import { Schema, morphism } from 'morphism';
class BaseError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseError);
    }
  }
}

class SchemaError extends BaseError {
  constructor(message = 'Wrong Schema Format', ...params) {
    super(message, ...params);
  }
}
class SourceError extends BaseError {
  constructor(message = 'Wrong JSON Format', ...params) {
    super(message, ...params);
  }
}

interface SourceSchemaContext {
  updateSource?: (source) => void;
  updateSchema?: <T>(schema: Schema<T>) => void;
}

interface ProviderProps {
  source?: string;
  schema?: string;
  result?: JSON;
  stats?: {
    lastRunElapsedTime: number;
    numberOfItems: number;
  };
  morphingStatus?: 'morphing' | 'done' | 'failed' | 'idle';
  errors?: {
    source?: string;
    schema?: string;
  };
}

type ProviderState = ProviderProps;

export const SourceSchemaContext = React.createContext<SourceSchemaContext & ProviderProps>({});

function monitoredScope(fn: Function, ...args: any[]) {
  const startTime = performance.now();
  const result = fn.call(this, ...args);
  const endTime = performance.now();
  const elapsedTime = Math.round((endTime - startTime) * 1000) / 1000;
  return { data: result, infos: { startTime, endTime, elapsedTime } };
}
export class SourceSchemaProvider extends Component<ProviderProps & SourceSchemaContext, ProviderState> {
  state: ProviderState = {
    source: JSON.stringify(DEFAULT_SOURCE, null, 2),
    schema: `const schema = {
  id: 'id',
  date: 'created_at',
  action: 'type',
  url: ({ repo }) => \`https://github.com/\${repo.name}\`,
  description: ({ actor, type, payload, repo }) =>
    \`\${actor.display_login} \${payload.action ? \`\${payload.action} \` : ''}\${type} on \${repo.name}\`
}`,
    result: null,
    stats: {
      lastRunElapsedTime: null,
      numberOfItems: 0
    },
    morphingStatus: 'idle',
    errors: {
      source: null,
      schema: null
    }
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
  updateSchemaError(payload) {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, schema: payload } });
  }
  resetSourceError() {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, source: null } });
  }
  updateResult() {
    const { errors } = this.state;

    let schemaObject;
    try {
      if (!this.state.schema.includes('const schema') && !this.state.schema.includes('let schema')) {
        throw new SchemaError('You should set your schema to a variable called schema => const schema = {}');
      } else {
        try {
          schemaObject = eval(`(()=>{
            ${this.state.schema};
            return schema
          })()`);
          this.updateSchemaError(null);
        } catch (error) {
          throw new SchemaError(error.message);
        }
      }
    } catch (e) {
      if (e instanceof SchemaError) {
        this.setState({ errors: { ...errors, schema: e.message } });
      } else {
        console.error('Something went wrong', e.message);
      }
    } finally {
      this.setState({ morphingStatus: 'failed' });
    }

    let sourceObject;
    try {
      try {
        sourceObject = JSON.parse(this.state.source);
        this.resetSourceError();
      } catch (error) {
        throw new SourceError(error.message);
      }
    } catch (e) {
      const { errors } = this.state;
      if (e instanceof SourceError) {
        this.setState({ errors: { ...errors, source: e.message } });
      } else {
        console.error('Something went wrong', e.message);
      }
    } finally {
      this.setState({ morphingStatus: 'failed' });
    }

    if (schemaObject && sourceObject) {
      this.setState({ morphingStatus: 'morphing' });
      const fn = () => morphism(schemaObject, sourceObject);
      this.setState({ morphingStatus: 'done' });

      const { data, infos } = monitoredScope(fn);
      const numberOfItemsMorphed = sourceObject ? (Array.isArray(sourceObject) ? sourceObject.length : 1) : 0;
      this.setState({ result: data, stats: { lastRunElapsedTime: infos.elapsedTime, numberOfItems: numberOfItemsMorphed } });
    }
  }
  render() {
    return (
      <SourceSchemaContext.Provider
        value={{
          source: this.state.source,
          schema: this.state.schema,
          result: this.state.result,
          stats: this.state.stats,
          errors: this.state.errors,
          morphingStatus: this.state.morphingStatus,
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
