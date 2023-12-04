import { MyButton } from "../Button/MyButton"
import { MyInput } from "../Input/MyInput"
import './Form.css'
import { useState } from "react"

export const CustomForm = () => {
    const [loginValue, setLigonValue] = useState('')
    const [passwordValue, setPassworValue] = useState('')
    function isLogin(e) {
        const value = e.target.value
        setLigonValue(value)
        const regExpLogin = /^[\w.]{0,25}@gmail\.com$/
        if (regExpLogin.test(value)) {
            console.log('Finaly');
        } console.log('Wrong');
    }
    function isPassword(e) {
        const password = e.target.value
        const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/
        if (regExpPassword.test(password)) {
            console.log('Good password');
        }
    }

    return (
        <div className="form_login">
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' value={loginValue} onChange={isLogin}></MyInput>
            <MyInput placeholder='Введите пароль' type='password' value={passwordValue} onChange={isLogin} />
            <MyButton>Войти</MyButton>
            <a href="https://www.example.com">У меня ёще нет аккуанта</a>
        </div>
    )

}