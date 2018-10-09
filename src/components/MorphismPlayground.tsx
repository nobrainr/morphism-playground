import { Component } from 'react';
import styled from 'styled-components';
import { InputSource } from './InputSource';
import { Schema } from './Schema';
import { Target } from './Target';
import { SourceSchemaProvider } from './SourceSchemaProvider';
import { Typography } from '@rmwc/typography';
import { Elevation } from '@rmwc/elevation';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 5px solid var(--mdc-theme-secondary);
`;

const PlaygroundsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const OutputContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    .content {
      display: flex;
      flex-direction: row;
      section {
        display: flex;
        flex-direction: row;
        flex: 1 1;
        margin: 0 16px;
      }
    }
  }
`;

const PlaygroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const PlaygroundHeader = styled.header`
  display: flex;
  background-color: #000;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

interface IDivider {
  direction: 'horizontal' | 'vertical';
}
const Divider = styled<IDivider, any>('div')`
  width: ${props => (props.direction === 'horizontal' ? '' : '20px')};
  height: ${props => (props.direction === 'horizontal' ? '20px' : '')};
  background-color: ${props => (props.direction === 'horizontal' ? 'var(--mdc-theme-primary)' : 'var(--mdc-theme-primary)')};
  border-left: 1px solid rgba(48, 48, 48, 0.1);
  border-right: 1px solid rgba(48, 48, 48, 0.4);
  display: flex;
  flex: 0 auto;
`;
export class MorphismViz extends Component {
  render() {
    return (
      <SourceSchemaProvider>
        <MainContainer>
          <PlaygroundsContainer>
            <Divider />
            <PlaygroundContainer>
              <PlaygroundHeader>
                <Typography use="headline6" theme="onPrimary">
                  Source (JSON)
                </Typography>
              </PlaygroundHeader>
              <InputSource />
            </PlaygroundContainer>
            <Divider />
            <PlaygroundContainer>
              <PlaygroundHeader>
                <Typography use="headline6" theme="onPrimary">
                  Schema (JS)
                </Typography>
              </PlaygroundHeader>
              <Schema />
            </PlaygroundContainer>
          </PlaygroundsContainer>
          <Divider direction="horizontal" />

          <OutputContainer>
            <PlaygroundHeader>
              <Typography use="headline6" theme="onPrimary">
                Target
              </Typography>
            </PlaygroundHeader>
            <div className="content">
              <section>
                <Typography use="overline">Infos</Typography>
                <Elevation z={9} transition>
                  elapsed time: last updated: 12seconds ago
                </Elevation>
              </section>
              <section>
                <Target />
              </section>
            </div>
          </OutputContainer>
        </MainContainer>
      </SourceSchemaProvider>
    );
  }
}

export default MorphismViz;
