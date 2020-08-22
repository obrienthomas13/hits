import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Navigation: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;;