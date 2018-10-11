import { Component } from 'react';
import styled from 'styled-components';
import { InputSource } from './InputSource';
import { Schema } from './Schema';
import { Target } from './Target';
import { SourceSchemaProvider, SourceSchemaContext } from './SourceSchemaProvider';
import { Typography } from '@rmwc/typography';

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
const MorphingStatus = styled(Typography).attrs({
  use: 'caption',
  theme: 'secondary-bg on-secondary'
})`
  padding: 4px;
`;

const OutputContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    flex: 1;
    ${MorphingStatus} {
      margin-left: 12px;
    }
    .content {
      display: flex;
      flex: 1;
      & section {
        flex: 1 1;
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
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 5px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const StyledCaption = styled(Typography).attrs({
  use: 'caption',
  theme: 'secondary'
})``;

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
        <SourceSchemaContext.Consumer>
          {({ stats, errors }) => {
            return (
              <MainContainer>
                <PlaygroundsContainer>
                  <Divider />
                  <PlaygroundContainer>
                    <PlaygroundHeader>
                      <Typography use="headline6" theme="onPrimary">
                        Source (JSON)
                      </Typography>
                      <StyledCaption>{errors.source}</StyledCaption>
                    </PlaygroundHeader>
                    <InputSource />
                  </PlaygroundContainer>
                  <Divider />
                  <PlaygroundContainer>
                    <PlaygroundHeader>
                      <Typography use="headline6" theme="onPrimary">
                        Schema (JS)
                      </Typography>
                      <StyledCaption>{errors.schema}</StyledCaption>
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
                    <div>
                      <Typography use="caption" theme="secondary">
                        Morphed {stats.numberOfItems} {stats.numberOfItems > 1 ? 'items' : 'item'} successfully in
                        <MorphingStatus>
                          {stats.lastRunElapsedTime}
                          ms
                        </MorphingStatus>
                      </Typography>
                    </div>
                  </PlaygroundHeader>
                  <div className="content">
                    <section>
                      <Target />
                    </section>
                  </div>
                </OutputContainer>
              </MainContainer>
            );
          }}
        </SourceSchemaContext.Consumer>
      </SourceSchemaProvider>
    );
  }
}

export default MorphismViz;
