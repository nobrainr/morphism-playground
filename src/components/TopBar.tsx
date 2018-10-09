import { Component } from 'react';
import { Toolbar, ToolbarRow, ToolbarTitle } from '@rmwc/toolbar';
import { Typography } from '@rmwc/typography';

class TopBar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarRow>
          <ToolbarTitle>
            <Typography use="headline5" theme="secondary">
              <span> Morphism Playground</span>
            </Typography>
          </ToolbarTitle>
        </ToolbarRow>
      </Toolbar>
    );
  }
}

export { TopBar };
export default TopBar;
