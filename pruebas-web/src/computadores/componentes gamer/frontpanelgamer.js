import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    Link
  } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ReactPlayer from "react-player";
import jfp from './imagenes gamer/jfp.jpg'
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

  video: {
    margin: "15px",
  },
  img: {
    margin: "15px",

  },

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
          Panel frontal del gabinete 
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>El panel frontal corresponde a las funcionalidades que vienen incluidas en el gabinete, dentro de estas funcionalidades encontramos: El boton de encendido y apagado (Power SW y Reset SW), leds que nos indican que está encendida la máquina (Power led+ y Power led-) y un led que nos indica que el disco duro está funcionando correctamente (H.D.D LED).   </Typography>
        <Typography variant="h2">
          Como conectar los cables del panel frontal
        </Typography>
        <Typography variant="h6" component="h5" gutterBottom>
          A continuación podras ver un video que te ayudará a conectar los cables del panel frontal de manera correcta.
        </Typography>
        <Typography variant="h6" component="h5" gutterBottom>
          <ReactPlayer url="https://youtu.be/linZDwva1Ec?t=8" className={classes.video} />
          La conexion del panel frontal siempre será igual para todos los computadores, sin embargo, los pines a los que van conectados pueden cambiar de lugar dependiendo de la placa madre.
          En la siguiente imagen se mostrará la forma que tienen los conectores del panel frontal.
          <img src={jfp} alt="FrontPanel" className={classes.img} />
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Link to='/pcgamer/hddgamer'>
          <Button variant="contained" color="primary">Anterior</Button>
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