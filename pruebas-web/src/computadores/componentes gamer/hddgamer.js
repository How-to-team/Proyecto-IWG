import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Switch from 'react-bootstrap/esm/Switch';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";

import Frontpanelgamer from './frontpanelgamer';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <Router>
          <Switch>
              <Route path='/pcgamer/hddgamer'>
              <div className={classes.root}>
                <CssBaseline />
                <Container component="main" className={classes.main} maxWidth="sm">
                    <Typography variant="h1" component="h1" gutterBottom>
                    Disco duro (HDD)
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    {"Breve descripcion del componente"}
                    </Typography>
                    <Typography variant="body1">cuerpo de la descripcion del componente.</Typography>
                </Container>
                <footer className={classes.footer}>
                    <Container maxWidth="sm">
                    <Typography variant="body1">Aqui iran dos botones, uno para avanzar y otro para retroceder</Typography>
                    <Link to='/pcgamer/frontpanelgamer'>
                        <button>Atras</button>
                    </Link>
                    
                    </Container>
                </footer>
            </div>
            </Route>
        </Switch>
        <Switch>
            <Route path='/pcgamer/frontpanelgamer'>
                <Frontpanelgamer/>
            </Route>
        </Switch>
        
    </Router>
 
  );
}