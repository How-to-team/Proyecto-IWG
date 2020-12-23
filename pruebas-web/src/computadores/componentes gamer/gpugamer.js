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
          Tarjeta de Video
        </Typography>
        <Typography variant="body1">La Tarjeta gráfica o más conocida como GPU (que realmente son las siglas de la unidad de procesamiento grafico que es lo que le da vida a la tarjeta gráfica) tiene como función renderizar las imágenes que llegan a la pantalla, con las características de video y relación de pantalla especificas por el usuario. 
          Algunas especificaciones que se buscan para una tarjeta ideal son: Frecuencia de reloj, VRAM o video RAM, Tamaño, Conectividad, Consumo, Ancho de banda del bus de memoria y compatibilidad SLI. 
        </Typography>
        <Typography variant="h2">
          Como ensamblar una tarjeta grafica  
        </Typography>
        <br/>
        <Typography variant="body1" component="h6">
          La tarjeta gráfica siempre debe ir instalada en la primera ranura PCIe de nuestra placa base
        </Typography>
        <br/>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791057517223739452/placa.jpg' alt="placa" width='500px'></img>
        <br/>
        <br/>
        <Typography variant="body1" component="h6">
          El paso más importante que debes recordar aquí es que no necesitarás mucha fuerza para instalar. Sé firme, pero suave. Si descubres que no está insertado adecuadamente, retira la tarjeta y verifica si algo está obstruyendo la ranura PCI Express. Deberías escuchar un click cuando está instalada, pero puede que no sea el caso de todas las placas base.
        </Typography>
        <br/>
        <Typography variant="body1" component="h6">
          De forma nativa, la BIOS de nuestro PC tiene asignada la función de gráficos dedicados a esta ranura, así que es posible que instalándola en otra inferior no funcione o muestre algún error en el post de arranque.
        </Typography>
        <br/>
        <text>Cuando estés conforme con la instalación, debes colocar los tornillos de la placa posterior para mantenerla firmemente en su lugar. Si es necesario, puedes desplazar la tarjeta ligeramente en su ranura para ajustar mejor los tornillos.</text>
        <br/>
        <br/>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791065977235570718/atornillar-gpu.jpg' alt="atornilllar gpu" width='500px'></img>
        <Typography variant="h3">
          Conección de los cables de alimentación
        </Typography>
        <br/>
        <Typography variant="body1" component="h6">
        Luego, Localiza los cables correctos que necesitas. Pueden ser uno o dos conectores de alimentación PCI Express de 6 u 8 pines. Verifica que tengas los correctos, ya que usar el cable de alimentación incorrecto podría dañar los componentes.
        </Typography>
        <br/>
        <img src='https://cdn.discordapp.com/attachments/775904281671893042/791068453598527488/cables_de_alimentacion.jpg' alt="cables" width='500px'></img>
        <br/>
        <br/>
        <Typography variant="body1" component="h6">
        Cuando estés seguro, conéctalos a las ranuras correspondientes al final de tu nueva GPU. Debería escuchar un sonido que permitió encajar, pero puedes confirmar que están completamente enganchados dándoles un ligero tirón. Si están enchufados correctamente, no deberían moverse.
        </Typography>
        <Typography variant="body1" component="h6">
          Ya estaria lista la instalación de la tarjeta grafica.
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Link to='/pcgamer/ramgamer'>
          <Button variant="contained" color="primary">Anterior</Button>
        </Link>
        <Link to='/pcgamer/m2gamer'>
          <Button variant="contained" color="primary">Siguiente</Button>
        </Link>
        </Container>
      </footer>
    </div>
  );
}

