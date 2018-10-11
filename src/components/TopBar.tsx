import { Component } from 'react';
import { Toolbar, ToolbarRow, ToolbarTitle } from '@rmwc/toolbar';
import { Typography } from '@rmwc/typography';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  margin: 12px 0px;
`;

class TopBar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarRow>
          <ToolbarTitle>
            <Typography use="headline5" theme="secondary">
              <StyledH2> Morphism Playground</StyledH2>
            </Typography>
          </ToolbarTitle>
        </ToolbarRow>
      </Toolbar>
    );
  }
}

export { TopBar };
export default TopBar;
