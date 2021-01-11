export const nameMask = (event: any, setValue: any): void => {
  const { value } = event.target;
  setValue(value);
};

export const crmMask = (event: any, setValue: any): void => {
  let { value } = event.target;

  if (value.length <= 9) {
    value = value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    value = value.replace(/(\d{2})(\d)/, '$1.$2'); // Coloca um ponto entre o segundo e o terceiro dígito
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o quinto e o sexto dígito

    setValue(value);
  }
};

export const telMask = (event: any, setValue: any): void => {
  let { value } = event.target;

  if (value.length <= 14) {
    value = value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    value = value.replace(/^(\d\d)(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
    value = value.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígito

    setValue(value);
  }
};

export const celMask = (event: any, setValue: any): void => {
  let { value } = event.target;

  if (value.length <= 15) {
    value = value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    value = value.replace(/^(\d\d)(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos

    setValue(value);
  }
};

export const cepMask = (event: any, setValue: any): void => {
  let { value } = event.target;

  if (value.length <= 9) {
    value = value.replace(/D/g, ''); // Remove tudo o que não é dígito
    value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // Coloca hífen entre o quinto e o sexto dígito

    setValue(value);
  }
};
