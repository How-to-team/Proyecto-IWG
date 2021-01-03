import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Recomendaciones
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Sugerencias de armado y páginas auxiliares
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Para este computador te recomendamos enfocar tu presupuesto en una buena tarjeta de video y un procesador a la altura de este.
          </Typography>
          <Typography gutterBottom>
            En la siguiente página puedes ver compatibilidad entre componentes: <Link href='https://pcpartpicker.com/list/' target='_blank'>Aqui</Link> 
          </Typography>
          <Typography gutterBottom>
            En la siguiente página puedes encontrar los mejores precios en Chile: <Link href='https://www.solotodo.cl/' target='_blank'>Aqui</Link>
          </Typography>
          <Typography gutterBottom>
            En la siguiente página puedes encontrar el ranking de los mejores componentes actualmente: <Link href='https://www.userbenchmark.com/' target='_blank'>Aqui</Link>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Entendido!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
