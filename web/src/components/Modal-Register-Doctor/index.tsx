import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Section } from './styled';
import api from '../../services/api';
import ChipSpecialties from '../Chip-Specialties';
import { nameMask, crmMask, telMask, celMask, cepMask } from '../Mask-input'
import SnackBar from '../Snack-Bar';
import LoadingComponent from '../Loading';

interface Props {
  open: any,
  setOpen: any,
  doctors: any,
  setDoctors: any
}

interface Specialty {
  id: number,
  name: string
}

export default function ModalRegisterDoctorComponent({ open, setOpen, doctors, setDoctors }: Props): JSX.Element {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<number[]>([]);

  const [openSnack, setOpenSnack] = useState<boolean>(false);
  const [severity, setSeverity] = useState<string>('');
  const [infoError, setInfoError] = useState<string>('');

  const [openLoading, setOpenLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [crm, setCrm] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [cel, setCel] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await api
        .get('/specialties')
        .then(response => { setSpecialties(response.data) })
        .catch(error => { console.log(error) })
    })();
  }, []);

  const handleClose = (): any => {
    setOpen(false);
    setName('')
    setCrm('')
    setTel('')
    setCel('')
    setCep('')
    setSelectedSpecialties([]);
    setSubscribed(false);
  };

  const handleSubscribe = async () => {
    const data = {
      name,
      crm,
      tel,
      cel,
      cep,
      specialties: selectedSpecialties
    }

    if (selectedSpecialties.length < 2) {
      setOpenSnack(true);
      setSeverity("warning");
      setInfoError("Choose at least two specialties")
      return;
    }

    setSubscribed(true);

    setOpenLoading(true);

    await api
      .post('/doctors', data)
      .then(response => {
        const copyArray = [...doctors];
        copyArray.splice(0, 0, response.data);
        setDoctors(copyArray);
        handleClose();
        setOpenLoading(false);
        setOpenSnack(true);
        setSeverity("success");
        setInfoError("Doctor successfully registered")
      })
      .catch(error => {
        setOpenLoading(false);
        setOpenSnack(true);
        setSeverity("error");
        setInfoError(error.response.data.msg)
      })
  };

  return (
    <Section>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Cadastrar Médico</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Preencha os campos a baixo para cadastrar um novo médico.
          </DialogContentText>

          <TextField
            onChange={(event) => nameMask(event, setName)}
            value={name}
            error={subscribed && !name || subscribed && name.length <= 3}
            helperText={subscribed && !name ? 'Insira um Nome Válido !' : ''}
            fullWidth margin="normal"
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            required
          />
          <TextField
            onChange={(event) => crmMask(event, setCrm)}
            value={crm}
            error={subscribed && !crm || subscribed && crm.length < 9}
            helperText={subscribed && !crm ? 'Insira um Crm Válido !' : ''}
            size="small"
            fullWidth margin="normal"
            id="outlined-basic"
            label="Crm"
            variant="outlined"
            required
          />
          <TextField
            onChange={(event) => telMask(event, setTel)}
            value={tel}
            error={subscribed && !tel || subscribed && tel.length < 14}
            helperText={subscribed && !tel ? 'Insira um Tel Válido !' : ''}
            size="small"
            fullWidth margin="normal"
            id="outlined-basic"
            label="Tel"
            variant="outlined"
            required
          />
          <TextField
            onChange={(event) => celMask(event, setCel)}
            value={cel}
            error={subscribed && !cel || subscribed && cel.length < 15}
            helperText={subscribed && !cel ? 'Insira um Cel Válido !' : ''}
            size="small"
            fullWidth margin="normal"
            id="outlined-basic"
            label="Cel"
            variant="outlined"
            required
          />
          <TextField
            onChange={(event) => cepMask(event, setCep)}
            value={cep}
            error={subscribed && !cep || subscribed && cep.length < 9}
            helperText={subscribed && !cep ? 'Insira um Cep Válido !' : ''}
            size="small"
            fullWidth margin="normal"
            id="outlined-basic"
            label="Cep"
            variant="outlined"
            required
          />
        </DialogContent>

        <ChipSpecialties
          specialties={specialties}
          selectedSpecialties={selectedSpecialties}
          setSelectedSpecialties={setSelectedSpecialties}
        />

        <DialogActions>
          {!openLoading ?
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            :
            null
          }

          <Button onClick={handleSubscribe} color="primary">
            {openLoading ? <LoadingComponent /> : 'Subscribe'}
          </Button>
        </DialogActions>
      </Dialog>

      <SnackBar openSnack={openSnack} setOpenSnack={setOpenSnack} severity={severity} msg={infoError} />
    </Section>
  );
}
