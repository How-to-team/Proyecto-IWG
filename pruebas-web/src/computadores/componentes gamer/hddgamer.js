import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    Link
  } from "react-router-dom";
import Button from '@material-ui/core/Button';
import background from "./imagenes gamer/background.jpeg"
import ReactPlayer from "react-player"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${background})`,
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
  video: {
    marginTop: "15px",
    marginBottom: "15px",
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
          Disco Duro
        </Typography>
        <Typography variant="body1">
          Hard Drive Disk o disco duro es un componente que sirve para guardar datos de forma permanente, es decir no se borran al apagar el computador. Estos funcionan utilizando magnetismo para grabar datos y archivos.
        </Typography>
        <br/>
        <Typography variant="h2">
          Como instalar el disco duro
        </Typography>
        <br/>
        <Typography variant="body1">
          A continuación podrás reproducir el siguiente video que mostrará como colocar e instalar un disco duro, el cual si deseas puedes adelantar hasta el segundo 40 apretando la tecla de flecha apuntando hacia la derecha (apretar 7 u 8 veces)
          <br/>
          <ReactPlayer url="https://www.youtube.com/watch?v=w4ZFFq2xYoM" className={classes.video} />
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Link to='/pcgamer/psugamer'>
          <Button variant="contained" color="primary">Anterior</Button>
        </Link>
        <Link to='/pcgamer/frontpanelgamer'>
          <Button variant="contained" color="primary">Siguiente</Button>
        </Link>
        </Container>
      </footer>
    </div>
  );
}