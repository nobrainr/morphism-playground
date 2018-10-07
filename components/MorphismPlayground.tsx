import { Component } from 'react';
import styled from 'styled-components';
import { InputSource } from './InputSource';
import { Schema } from './Schema';
import { Target } from './Target';
import { SourceSchemaProvider } from './SourceSchemaProvider';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const PlaygroundsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SectionContainer = styled(MainContainer)`
  margin: 0px 24px;
`;
export class MorphismViz extends Component {
  render() {
    return (
      <SourceSchemaProvider>
        <MainContainer>
          <PlaygroundsContainer>
            <SectionContainer>
              <h4>Source</h4>
              <InputSource />
            </SectionContainer>
            <SectionContainer>
              <h4>Schema</h4>
              <Schema />
            </SectionContainer>
            <SectionContainer>
              <h4>Target</h4>
              <Target />
            </SectionContainer>
          </PlaygroundsContainer>
        </MainContainer>
      </SourceSchemaProvider>
    );
  }
}

export default MorphismViz;
