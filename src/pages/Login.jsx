import React, { useState } from 'react';
import { CustomForm } from './Form/Form';
import { Link } from 'react-router-dom';


export function Login() {
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
                    {/* <Link to="/" className='go_out'>Выйти</Link> */}
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

;