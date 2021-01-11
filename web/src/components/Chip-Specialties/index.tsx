import React from 'react';
import DoneIcon from '@material-ui/icons/Done';

import { List, ListItem } from './styled';

interface Props {
  specialties: any,
  selectedSpecialties: any,
  setSelectedSpecialties: any
}
interface Specialty {
  id: number,
  name: string
}

export default function ChipSpecialtiesComponent({ specialties, selectedSpecialties, setSelectedSpecialties }: Props): JSX.Element {
  const handleSelect = (specialty: Specialty): void => {
    const alreadySelected = selectedSpecialties.includes(specialty.id);
    if (!alreadySelected) { setSelectedSpecialties([...selectedSpecialties, specialty.id]); }
    else {
      const filteredSpecialties = selectedSpecialties.filter((item: number) => item !== specialty.id)
      setSelectedSpecialties(filteredSpecialties);
    }
  }

  return (
    <List>
      {specialties && specialties.map((specialty: Specialty) => (
        <ListItem key={specialty.id}
          className={selectedSpecialties.includes(specialty.id) ? 'selected' : ''}
          onClick={() => handleSelect(specialty)}>
          <span> {specialty.name} </span>
          <DoneIcon />
        </ListItem>
      ))}
    </List>
  );
}
