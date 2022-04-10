import React from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default function SomeHeader() {
    return (
      <AppBar position='static'>
         <Toolbar>
             <Typography>React Navbar Example</Typography>
         </Toolbar>
      </AppBar>

    );
}
