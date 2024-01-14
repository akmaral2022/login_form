import React, { useState } from 'react';
import { LoginForm } from '../components/Form/LoginForm';
import { Entered } from './Entered';

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
                <Entered /> :
                <>
                    <div className={`block Poster ${formSubmited ? `centered` : ``}`}>
                    </div>
                    <div className='block Form'>
                        <LoginForm onError={handleFormError} onSuccess={handleFormSuccess} />
                        {errorMessage && <div className="error">{errorMessage}</div>}
                    </div>
                </>
            }
        </div>
    );
}

;