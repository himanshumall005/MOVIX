import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';

function App() {
  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return <div className='App'>App</div>;
}

export default App;
