import React, { useState } from 'react';
import './App.css';
import { CustomForm } from './components/Form/Form';

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [formSubmited, setFormSubmited] = useState(false)

  const handleFormError = (error) => {
    setErrorMessage(error);
    console.log(error);
  };
  const handleFormSuccess = () => {
    setErrorMessage(null)
    setFormSubmited(true)
  }

  return (
    <div className="App">
      {formSubmited ?
        <div className={`block Poster ${formSubmited ? `centered` : ``}`}>
          <h1>С возвращением!</h1>
          <a href="" className='go_out'>Выйти</a>
        </div> :
        <>
          <div className={`block Poster ${formSubmited ? `centered` : ``}`}>
          </div>
          <div className='block Form'>
            <CustomForm onError={handleFormError} onSuccess={handleFormSuccess} />
            {errorMessage && <div className="error">{errorMessage}</div>}
          </div>
        </>
      }

    </div>
  );
}

export default App;