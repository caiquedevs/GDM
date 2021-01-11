import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GlobalStyle from '../styles/styled';
import {
  Main,
  Header,
  ContainerBtnRegisterDoctor,
  List,
  ListItem,
  BtnEdit,
} from './styled';

import ModalRegisterDoctorComponent from '../components/Modal-Register-Doctor';
import ModalUpdateDoctorComponent from '../components/Modal-Update-Doctor';
import logo from '../assets/logo.svg';

interface Props {
  doctors: Array<DoctorType>

  setDoctors: any;
};

interface DoctorType {
  id: number,
  name: string,
  crm: string,
  tel: string,
  cel: string,
  cep: string,
  all_specialties: any
}

function HomePage({ doctors, setDoctors }: Props): JSX.Element {
  const [openRegisterDoctor, setOpenRegisterDoctor] = React.useState<boolean>(false);
  const [openUpdateDoctor, setOpenUpdateDoctor] = React.useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = React.useState<DoctorType>();

  const handleClickOpenRegisterDoctor = () => {
    setOpenRegisterDoctor(true);
  };

  const handleClickOpenUpdateDoctor = (doctor: any) => {
    setOpenUpdateDoctor(true);
    setSelectedDoctor(doctor);
  }

  return (
    <>
      <GlobalStyle />

      <ModalRegisterDoctorComponent
        open={openRegisterDoctor}
        setOpen={setOpenRegisterDoctor}
        doctors={doctors}
        setDoctors={setDoctors}
      />

      {
        selectedDoctor ?
          <ModalUpdateDoctorComponent
            open={openUpdateDoctor}
            setOpen={setOpenUpdateDoctor}
            selectedDoctor={selectedDoctor}
            doctors={doctors}
            setDoctors={setDoctors}
          />
          :
          null
      }

      <Main>
        <Header>
          <figure>
            <img src={logo} alt="logo" />
            <figcaption> Home </figcaption>
          </figure>
        </Header>

        <ContainerBtnRegisterDoctor>
          <button type="button" onClick={handleClickOpenRegisterDoctor}>
            Cadastrar novo médico <LocalHospitalIcon />
          </button>
        </ContainerBtnRegisterDoctor>

        <List>
          {doctors &&
            doctors.map((doctor: any) => (
              <ListItem key={doctor.id}>
                <AccountBoxIcon />
                <div className="text-group">
                  <span>Nome</span>
                  <small>{doctor.name}</small>
                </div>

                <div className="text-group">
                  <span>Especialidades</span>
                  <small>
                    {doctor.all_specialties.map((specialty: any) => `${`${specialty.name} / `}`)}
                  </small>
                </div>

                <BtnEdit type="button" onClick={() => handleClickOpenUpdateDoctor(doctor)}>
                  <EditIcon />
                </BtnEdit>
              </ListItem>
            ))}
        </List>
      </Main>
    </>
  );
}

export default HomePage;
