import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/styled';
import HomePage from './pages';
import api from './services/api';

function App(): JSX.Element {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    (async () => {
      await api
        .get('/doctors')
        .then(response => { setDoctors(response.data.reverse()) })
        .catch(error => { console.log(error) })
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HomePage doctors={doctors} setDoctors={setDoctors} />
    </>
  );
}

export default App;
