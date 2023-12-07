import { MyButton } from "../Button/MyButton"
import { MyInput } from "../Input/MyInput"
import './Form.css'
import { useState } from "react"
import Show from "../../img/Show.png"

export const CustomForm = ({ onError, onSuccess }) => {
    const [loginValue, setLoginValue] = useState('')
    const [loginError, setLoginError] = useState('')
    const [passwordValue, setPassworValue] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const regExpLogin = /^[\w.]{0,25}@gmail\.com$/
    const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/


    function isLogin(e) {
        const value = e.target.value
        setLoginValue(value)
        loginError('Неверный логин')
    }

    function isPassword(e) {
        const password = e.target.value
        setPassworValue(password)
        passwordError('Неверный формат пароля')
    }

    function checkData() {
        if (regExpLogin.test(loginValue) && regExpPassword.test(passwordValue)) {
            console.log('Принято')
            onSuccess()
        } else if (!regExpLogin.test(loginValue) || !regExpPassword.test(passwordValue)) {
            const errorMessage = 'Неверно указан логин или пароль'
            setLoginError(errorMessage)
            setPasswordError(errorMessage)
            onError(errorMessage)
            console.log(errorMessage);
        }

    }


    return (
        <div className="form_login">
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' value={loginValue} onChange={isLogin}></MyInput>
            <div className="password">
                <MyInput placeholder='Введите пароль' type='password' value={passwordValue} onChange={isPassword} />
                <button className="show__password">
                    <img src={Show}></img>
                </button>
            </div>
            <MyButton onClick={checkData}>Войти</MyButton>
            <a href="https://www.example.com">У меня ещё нет аккаунта</a>
        </div>
    )

}