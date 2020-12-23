import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    Link
  } from "react-router-dom";
import Button from '@material-ui/core/Button';
import postorn from "./imagenes gamer/tornillosplaca.webp"
import tornillos from "./imagenes gamer/soportesplaca.jpg"
import sizes from "./imagenes gamer/tamañomb.jpg"
import backplate from "./imagenes gamer/blackplatemb.jpg"
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
  imgs: {
    margin: "15px",

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
          Placa Madre
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          La placa base, tambien conocida como el corazon de la maquina, es donde van conectados todos los componentes que constituyen un computador. Como su nombre lo dice, este componente es la base de todo ensamble y va atornillada directamente al gabinete. 
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Como instalar la placa madre en el gabinete
        </Typography>
        <Typography variant="h6" component="h5" gutterBottom>
          Primero que todo debes verificar que tu placa madre tenga el tamaño requerido para entrar en el gabinete, para eso debes fijarte en el modelo de tu placa base para asi saber su tamaño, luego debes verificar el tamaño del gabinete, ten en consideracion que un gabinete de tamaño grande (ATX) es compatible con cualquier placa base con un tamaño igual o menor a este. Puedes guiarte de las siguientes imagenes.
          <img src={sizes} alt="tamaños" className={classes.imgs}/>
          Luego de haber verificado el tamaño de tu placa madre debes atornillar los soportes en el gabinete, para esto debes procurar que los agujeros coincidan con tu placa base de la siguiente forma.
          <br/>
          <img src={postorn} alt="posiciones" className={classes.imgs}/>
          <br/>
          Los soportes del gabinete se ven de esta forma.
          <img src={tornillos} alt="soportes" className={classes.imgs}/>
          <br/>
          Antes de atornillar la placa base a los soportes, procura poner el backplate en el gabinete de manera que las entradas coincidan con los conectores de tu placa.
          <img src={backplate} alt="backplate" className={classes.imgs}/>
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Link to='/pcgamer/cpugamer'>
          <Button variant="contained" color="primary">Siguiente</Button>
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
