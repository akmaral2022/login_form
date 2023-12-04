import React, { useState } from 'react';
import './App.css';
import { CustomForm } from './components/Form/Form';

function App() {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFormError = (error) => {
    setErrorMessage(error);
  };
  const handleFormSuccess = () => {
    setErrorMessage(null)
  }

  return (
    <div className="App">
      <div className='block Poster'>
      </div>
      <div className='block Form'>
        <CustomForm onError={handleFormError} onSuccess={handleFormSuccess} />
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default App;