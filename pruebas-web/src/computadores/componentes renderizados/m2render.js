import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import fondo from './imagenes render/fondo.jpg'
import ReactPlayer from "react-player"
import insertarelSSDen30grados from "./imagenes render/insertarelSSDen30grados.PNG"
import reinsertareltornilloydemaneragentilylentaatornillar from "./imagenes render/reinsertareltornilloydemaneragentilylentaatornillar.PNG"
import removereltornillo from "./imagenes render/removereltornillo.PNG"
import slotm2 from "./imagenes render/slotm2.PNG"
import usandoelslotadecuadodelm2 from "./imagenes render/usandoelslotadecuadodelm2.PNG"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    color: "#46ffff",
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
          Memoria SSD 
        </Typography>
        <Typography variant="body1">
          Solid State Drive o unidad de estado sólido, es un componente parecido al disco duro que verás mas adelante, este almacena la información y archivos del computador sin que se borren en microchips con memorias flash, y llevan un procesador integrado para leer y escribir datos, donde este último le da una gran eficiencia a la velocidad del computador. Probablemente la mejor opción que puedes escoger para tu computador de renderizado, a comparación de un disco duro. 
        </Typography>
        <br/>
        <Typography variant="h2">
          Como colocar e instalar tu unidad de estado sólido
        </Typography>
        <br/>
        <Typography variant="body2">
          En primer lugar para poder colocar tu SSD hay que discriminar que tipo de SSD es, porque hay dos tipos de ensamble en las dos variantes. Estos tipos son:
        </Typography>
        <br/>
        <Typography variant="body1">-Disco SSD SATA</Typography>
        <Typography variant="body1">-Disco SSD M.2</Typography>
        <br/>
        <Typography>
          Empezando por el más fácil tenemos el SSD SATA que tiene una instalación similar al disco duro, a continuación pueden ver este breve vídeo:
          <br/>
          <ReactPlayer url="https://www.youtube.com/watch?v=xzG7rgRRAmI&feature=youtu.be" className={classes.video} />
        </Typography>
        <br/>
        <Typography>
          Ahora en el caso del disco SSD M.2 te vamos a ir explicando paso a paso:
        </Typography>
        <br/>
        <Typography>
          -Paso 1: Verifica cual es el lugar apropiado para poner el M.2, esto lo puedes hacer revisando el manual de tu placa madre, y si no lo tienes a mano, en internet buscando el modelo de tu placa, puedes ver su manual en línea. 
          <img src={usandoelslotadecuadodelm2} width="800" alt="Slotade" className={classes.img} />
        </Typography>
        <br/>
        <Typography>
          -Paso 2: Una vez encontrado el mejor lugar para colocar la SSD, tienes que remover el siguiente tornillo:
          <img src={removereltornillo} width="800" alt="Remover" className={classes.img} />
        </Typography>
        <br/>
        <Typography>
          -Paso 3: Removido ya el tornillo, puedes proceder a insertar el SSD en el espacio que puedes ver en la siguiente imagen:
          <img src={slotm2} width="800" alt="Slot" className={classes.img} />
          Insertalo suavemente en un ángulo bajo para una mejor inserción
          <img src={insertarelSSDen30grados} width="800" alt="Insertar" className={classes.img} />
        </Typography>
        <br/>
        <Typography>
          -Paso 4: Ahora solo queda reinsertar el tornillo suavemente
          <img src={reinsertareltornilloydemaneragentilylentaatornillar} width="800" alt="Reinsertar" className={classes.img} />
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Link to='/pcrender/gpurender'>
            <Button variant="contained" color="primary">Anterior</Button>
          </Link>
          <Link to='/pcrender/psurender'>
            <Button variant="contained" color="primary">Siguiente</Button>
          </Link>
          <br/>
          <br/>
          <Link to="/pcrender">
            <Button variant="contained" color="primary" fullWidth="5px">Pc de renderizado</Button>
          </Link>
        </Container>
      </footer>
    </div>
  );
}