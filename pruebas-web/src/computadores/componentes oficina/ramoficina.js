import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import fondox from './imagenes oficina/fondox.jpg'
import ReactPlayer from "react-player"

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
          Memoria Ram 
        </Typography>
        <Typography variant="body1">RAM son las siglas de "Random Access Memory" o "Memoria de Acceso Aleatorio". Su función principal es almacenar datos e instrucciones para que puedan ser accedidos por otros componentes básicos, de manera que evita que tengan que volver a pasar por el procesador o por la tarjeta gráfica.</Typography>
        <br/>  
        <Typography variant="h2">
          Como instalar la memoria RAM
        </Typography>
        <br/>
        <Typography variant="body1">
          El instalar la memoria RAM es bastante simple y lo puedes observar brevemente en el vídeo a continuación, pero después de éste te entregaremos cierta información al momento de elegir la RAM
          <br/>
          <br/>
          <ReactPlayer url="https://www.youtube.com/watch?v=ziP1DmDDjOg&feature=youtu.be" className={classes.video} />
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Link to='/pcoffice/cpuoficina'>
            <Button variant="contained" color="primary">Anterior</Button>
          </Link>
          <Link to='/pcoffice/psuoficina'>
            <Button variant="contained" color="primary">Siguiente</Button>
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