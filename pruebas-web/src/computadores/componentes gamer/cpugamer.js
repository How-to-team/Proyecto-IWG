import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {
    Link
  } from "react-router-dom";
import ReactPlayer from "react-player"
import background from "./imagenes gamer/background.jpeg"


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
          Procesador 
        </Typography>
        <Typography variant="body1" component="h6">CPU son las siglas de Central Processing Unit, lo que traducido significa Unidad Central de Procesamiento.
          A la CPU se la suele llamar procesador, y puedes considerarla como el cerebro de cualquier dispositivo.
          Se encarga de procesar todas las instrucciones del dispositivo, leyendo las órdenes y requisitos del sistema operativo, así como las instrucciones de cada uno de los componentes y las aplicaciones.
        </Typography>
        <Typography variant="h2">
          Como ensamblar un procesador
        </Typography>
        <br/>
        <Typography variant="body1" component="h6">
          A continuación les mostraremos un video que te ayudará a instalar el procesador de manera correcta.
        </Typography>
        <br/>
        <Typography variant="body1" >
            En este caso se muestra como se instala un procesador de la marca intel, pero para el caso de AMD, el procedimiento es muy similar.
            <ReactPlayer url="https://www.youtube.com/watch?v=pzTxM1MjT9c" className={classes.video} />
            Debes tener en cuenta que todos los procesadores poseen una marca en forma de flecha, esta debe coincidir con una marca similar ubicada en una esquina del zócalo (Lugar donde se debe encajar el procesador) en la placa base.
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Link to='/pcgamer/mothergamer'>
          <Button variant="contained" color="primary">Anterior</Button>
        </Link>
        <Link to='/pcgamer/ramgamer'>
          <Button variant="contained" color="primary" >Siguiente</Button>
        </Link>
        <br/>
        <br/>
        <Link to='/pcgamer'>
          <Button variant="contained" color="primary" fullWidth="5px">Pc Gamer</Button>
        </Link>
        </Container>
      </footer>
    </div>
  );
}
