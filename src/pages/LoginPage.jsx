import { useState } from "react";
import { LoginForm } from "../components/LoginForm/LoginForm"
import Frame from "../img/Frame.png"
import "../moduls.css/LoginPage_modules.css"
import { Entered } from "./Entered";

export const LoginPage = () => {

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
        <div className="login__page">
            {formSubmited ?
                <Entered /> :
                <>
                    <div className="login__poster">
                        <img src={Frame} alt="Stay at home" />
                        <h1>Lorby</h1>
                        <h3>Твой личный репетитор</h3>
                    </div>
                    <div className="login__place">
                        <div className={`block Poster ${formSubmited ? `centered` : ``}`}>
                        </div>
                        <div className='block Form'>
                            <LoginForm onError={handleFormError} onSuccess={handleFormSuccess} />
                            {errorMessage && <div className="error">{errorMessage}</div>}
                        </div>
                    </div>
                </>
            }
        </div>
    )

}