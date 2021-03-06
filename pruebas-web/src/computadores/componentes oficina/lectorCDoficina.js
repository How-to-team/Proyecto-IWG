import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import fondox from './imagenes oficina/fondox.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondox})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    color: "white",
    backgroundAttachment: "fixed",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: "rgba(3, 9, 99, .59)",  
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h1" component="h1" gutterBottom>
          Lector de Discos
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Breve descripcion del componente"}
        </Typography>
        <Typography variant="body1">cuerpo de la descripcion del componente.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Link to="/pcoffice/frontpaneloficina">
            <Button variant="contained" color="primary">Anterior</Button>
          </Link>
          <br/>
          <br/>
          <Link to="/pcoffice">
            <Button variant="contained" color="primary" fullWidth="5px">Pc de oficina</Button>
          </Link>
        </Container>
      </footer>
    </div>
  );
}