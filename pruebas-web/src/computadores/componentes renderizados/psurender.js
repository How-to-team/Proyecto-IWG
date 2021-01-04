import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import fondo from './imagenes render/fondo.jpg'

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
          Fuente de poder 
        </Typography>
        <Typography variant="body1">La fuente de poder o de alimentación se encarga de convertir la corriente alterna (AC) en continua (DC). Para la elección de ella hay que considerar cual es el consumo de todas las demás piezas del computador.</Typography>
        <br/>
        <Typography variant='body1'>Para ello habrá que garantizar que el SKU elegido dispone de suficientes tomas PEG, y que el número de pines de estas coincide con los elementos de hardware que se van a conectar allí.</Typography>
        <Typography variant="h2" component="h1" gutterBottom>
          Como instalar una fuente de poder 
        </Typography>
        <Typography variant='body1'>Instalar la fuente de alimentación es muy sencillo, y realmente tan solo tenemos que asegurarnos de que la orientamos correctamente. Sea o no la fuente modular, si la caja tiene el punto de montaje en el suelo de esta, debemos colocar el ventilador hacia abajo, pues es por ahí por donde le entrará el aire.</Typography>
        <br/>
        <Typography variant='body1'>Si el punto de montaje está arriba debemos fijarnos si la caja tiene rejilla por arriba, en cuyo caso deberemos orientar el ventilador de la fuente hacia arriba; en caso contrario, no nos quedará más remedio que orientarlo hacia abajo, aunque no es lo ideal porque recibirá aire caliente del resto de componentes. No obstante, prácticamente todas las cajas de PC actuales tienen el punto de montaje abajo.</Typography>
        <br/>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791072445766565908/unknown.png'width='500px' alt="fuente"></img>
        <br/>
        <br/>
        <Typography varian='body1'>Luego, Simplemente colocamos la fuente en su sitio y atornillamos los cuatro tornillos que tiene por detrás.</Typography>
        <br/>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791072518185811988/unknown.png' alt="atornillando" width='500px'></img>
        <br/>
        <Typography variant="h3" component="h1" gutterBottom>
          Gestión del cableado de la fuente de alimentación 
        </Typography>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791074118693945354/unknown.png' alt="organizacion" width='500px'></img>
        <br/>
        <br/>
        <Typography variant='body1'>Una vez que atornillemos la fuente a la parte trasera de la caja PC, debemos hacer una gestión del cableado que nos permita tener organizados los cables. Para ello, vamos a hacer uso de la parte lateral de la derecha de la caja, que es por donde pasaremos todos los cables de la fuente de alimentación con dirección a la placa base y el resto de los componentes.</Typography>
        <Typography variant='h4'>Cable con conector ATX de 20+4 pines</Typography>
        <Typography variant='body1'>Este es el primer cable que deberíamos canalizar y conectar puesto que es el más grueso y grande, y el que más nos costará colocar. Generalmente enrutamos el cable por detrás de la placa base, en el hueco que tienen todas las cajas, y lo sacamos a la altura del conector ATX de la placa base, que por norma general está en la zona superior derecha.</Typography>
        <br/>
        <Typography variant='body1'>Para conectarlo simplemente debemos fijarnos dónde está la pestaña, aunque de todas maneras en sentido contrario no encajará, solo puede conectarse en ese sentido. Simplemente colocamos el conector encima y hacemos presión, entrará solo (la pestaña es para desconectarlo, no para conectarlo).</Typography>
        <br/>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791076575206178826/unknown.png' alt="EPS" width='500px'></img>
        <br/>
        <Typography variant='h4'>Cable con conector EPS de 4+4 pines</Typography>
        <Typography variant='body1'>Este cable es sencillo de canalizar, y por norma general deberá ir en la zona superior izquierda de la placa base. Normalmente deberéis sacar por el agujero de la caja bastante cable para poder conectarlo, para después tirar de él y que quede bien escondido. Igual que el de 24 pines, tiene una pestaña y solo puede conectarse en un sentido.</Typography>
        <br/>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791076965326520350/unknown.png' alt="SATA/MOLEX" width='500px'></img>
        <Typography variant='h4'>Cables SATA/MOLEX de periféricos</Typography>
        <Typography variant='body1'>Estos cables son los encargados de dar alimentación a los discos duros, SSD, rehobuses y demás periféricos que podamos tener. Su utilización dependerá de la configuración de hardware que tengamos, puesto que si por ejemplo solo tenemos un SSD PCIe que va conectado a placa estos cables serán innecesarios.</Typography>
        <br/>
        <Typography variant='body1'>En tal caso, si la fuente es modular no tendremos ni que conectarlos a la fuente. Tanto los SATA como los MOLEX solo tienen una posición de conexión, aunque carezcan de pestaña, por lo que no podemos equivocaros al conectarlos.</Typography>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791078621913153546/unknown.png' alt="Pci-express" width='500px'></img>
        <Typography variant='h4'>Cables con conector PCI-Express</Typography>
        <Typography variant='body1'>El uso de estos cables, igual que los SATA, dependerá de si nuestra tarjeta gráfica requiere o no alimentación adicional. En tal caso, para esconderlos lo mejor es enrutarlos por detrás de la placa base y sacarlos por el lateral, un poco por encima de la gráfica para poder conectarlos sin que estorben demasiado.</Typography>
        <br/>
        <Typography variant='body1'>En este caso tanto los conectores de 6 como de 8 pines tienen pestaña y solo permiten conectarlos en un sentido. En el caso de los conectores de 6+2 pines, los dos pines adicionales encajan por debajo del conector de seis, tampoco hay pérdida. Si el conector es de 6+2 y la gráfica solo tiene conectores de 6, la parte de 2 pines quedará al aire. No pasa nada, es así.</Typography>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791078359752507443/unknown.png' alt="al aire" width='500px'></img>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Link to='/pcrender/m2render'>
            <Button variant="contained" color="primary">Anterior</Button>
          </Link>
          <Link to='/pcrender/hddrender'>
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
