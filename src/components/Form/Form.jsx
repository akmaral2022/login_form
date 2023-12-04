import { MyButton } from "../Button/MyButton"
import { MyInput } from "../Input/MyInput"
import './Form.css'
import { useState } from "react"

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
    }

    function isPassword(e) {
        const password = e.target.value
        setPassworValue(password)
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
            <MyInput placeholder='Введите пароль' type='password' value={passwordValue} onChange={isPassword} />
            <MyButton onClick={checkData}>Войти</MyButton>
            <a href="https://www.example.com">У меня ещё нет аккаунта</a>
        </div>
    )

}