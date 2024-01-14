import { MyButton } from "../Button/MyButton"
import { MyInput } from "../Input/MyInput"
import './Form.css'
import { useState } from "react"
import Show from "../../img/Show.png"
import Hide from "../../img/Hide.png"

export const LoginForm = ({ onError, onSuccess }) => {
    const [loginValue, setLoginValue] = useState('')
    const [loginError, setLoginError] = useState('')
    const [passwordValue, setPassworValue] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const regExpLogin = /^[\w.]{0,25}@gmail\.com$/
    const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/
    const [showPassword, setShowPassword] = useState(false)


    function checkData() {
        if (regExpLogin.test(loginValue) && regExpPassword.test(passwordValue)) {
            console.log('Принято')
            onSuccess()
        } else if (!regExpLogin.test(loginValue) || !regExpPassword.test(passwordValue)) {
            const errorMessage = 'Неверно указан логин или пароль'
            setLoginError(errorMessage)
            setPasswordError(errorMessage)
            onError(errorMessage)
            console.log(errorMessage, loginError, passwordError);
        }
    }

    function passwordIsShown() {
        setShowPassword(!showPassword)
    }


    return (
        <div className="form_login">
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' value={loginValue} onChange={(e) => setLoginValue(e.target.value)}></MyInput>
            <div className="input__block">
                <MyInput placeholder='Введите пароль' type={showPassword ? 'text' : 'password'} value={passwordValue} onChange={(e) => setPassworValue(e.target.value)} />
                <button className="show__password" onClick={passwordIsShown}>
                    {showPassword ? <img src={Hide} alt="Hide password"></img> : <img src={Show} alt="Show password"></img>}
                </button>
            </div>

            <div className="enter__button">
                <MyButton onClick={checkData}>Войти</MyButton>
            </div>
            <a href="https://www.example.com">У меня ещё нет аккаунта</a>
        </div>
    )

}