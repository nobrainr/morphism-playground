import { Component } from 'react';
import styled from 'styled-components';
import { InputSource } from './InputSource';
import { Schema } from './Schema';
import { Target } from './Target';
import { SourceSchemaProvider } from './SourceSchemaProvider';
import { Typography } from '@rmwc/typography';
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
              <Typography use="headline4">Source (JSON)</Typography>
              <InputSource />
            </SectionContainer>
            <SectionContainer>
              <Typography use="headline4">Schema (JS)</Typography>
              <Schema />
            </SectionContainer>
            <SectionContainer>
              <Typography use="headline4">Target</Typography>
              <Target />
            </SectionContainer>
          </PlaygroundsContainer>
        </MainContainer>
      </SourceSchemaProvider>
    );
  }
}

export default MorphismViz;