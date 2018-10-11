import { Component } from 'react';
import { Toolbar, ToolbarRow, ToolbarTitle } from '@rmwc/toolbar';
import { Typography } from '@rmwc/typography';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  margin: 12px 0px;
`;

const StyledToolbar = styled(Toolbar)`
  background-color: var(--mdc-theme-accent1);
`;

class TopBar extends Component {
  render() {
    return (
      <StyledToolbar>
        <ToolbarRow>
          <ToolbarTitle>
            <Typography use="headline5" theme="primary">
              <StyledH2> Morphism Playground</StyledH2>
            </Typography>
          </ToolbarTitle>
        </ToolbarRow>
      </StyledToolbar>
    );
  }
}

export { TopBar };
export default TopBar;
