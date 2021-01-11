import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface Props {
  openSnack: any,
  setOpenSnack: any,
  severity: any,
  msg: string,
}

export default function SnackBarComponent({ openSnack, setOpenSnack, severity, msg }: Props): JSX.Element {
  const classes = useStyles();

  const handleClose = (event?: React.SyntheticEvent, reason?: string): any => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={openSnack} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
