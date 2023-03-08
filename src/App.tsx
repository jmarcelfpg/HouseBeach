import React from 'react'
import './App.css';
import { CssBaseline, GlobalStyles, Container } from '@mui/material';
import { createStyles, makeStyles, } from '@mui/styles'
import { alpha } from '@mui/material/styles'
import { Theme } from '@emotion/react';
import Information from './Main/Information';
import Cabecera from './Cabecera';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appContainer: {
    // backgroundImage: "url(Playa_Manzanillo.jpg)",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
  }
}))

function App() {
  const classes = useStyles()
  return (<>
    <GlobalStyles styles={theme => ({
      '*::-webkit-scrollbar': {
        height: '5px',
        width: '5px'
      },
      '*::-webkit-scrollbar-track': {
        borderRadius: '5px',
        '-webkit-box-shadow': `inset 0 0 15px ${alpha(theme.palette.getContrastText(theme.palette.background.paper), 0.1)}`
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: alpha(theme.palette.getContrastText(theme.palette.background.paper), 1),
        borderRadius: "5px"
        // outline: `1px solid ${theme.palette.warning.main}`
      },
      ul: { margin: 0, padding: 0, listStyle: 'none' }
    })} />
    <CssBaseline />
    <Container disableGutters maxWidth={false} sx={{ m: 0, p: 0, minWidth: "100vw", overflow: "hidden" }} className={classes.appContainer}>
      <Cabecera />
      {/* <NavigationBar /> */}
      <Information />
      {/* <Pricing /> */}
    </Container>
  </>
  );
}

export default App;
