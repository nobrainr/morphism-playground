import { Component } from 'react';
import styled from 'styled-components';
import { InputSource } from './InputSource';
import { Schema } from './Schema';
import { Target } from './Target';

const source = {
  a: 'value',
  b: 'bvalue'
};
const schema = {
  foo: 'a',
  bar: 'b',
  test: () => 'test'
};

const MainContainer = styled.div`
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
      <MainContainer>
        <SectionContainer>
          <InputSource data={source} />
        </SectionContainer>
        <SectionContainer>
          <Schema data={schema} />
        </SectionContainer>
        <SectionContainer>
          <Target source={source} schema={schema} />
        </SectionContainer>
      </MainContainer>
    );
  }
}

export default MorphismViz;
