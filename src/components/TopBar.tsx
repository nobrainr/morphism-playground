import { Component } from 'react';
import { Toolbar, ToolbarRow, ToolbarTitle } from '@rmwc/toolbar';
import styled from 'styled-components';

const StyledToolbarTitle = styled(ToolbarTitle)`
  color: #000;
`;

class TopBar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarRow>
          <StyledToolbarTitle>Morphism Playground</StyledToolbarTitle>
        </ToolbarRow>
      </Toolbar>
    );
  }
}

export { TopBar };
export default TopBar;
