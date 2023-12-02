import { MyButton } from "../Button/MyButton"
import { MyInput } from "../Input/MyInput"
import './Form.css'
import { useState } from "react"

export const CustomForm = () => {
    const [loginValue, setLigonValue] = useState('')
    function isLogin(e) {
        const value = e.target.value
        const regExpLogin = /^[\w.]{0,25}@gmail\.com$/
        if (regExpLogin.test(value)) {
            console.log('Finaly');
        } console.log('Wrong');
        setLigonValue(value)
    }

    return (
        <div className="form_login">
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' onChange={isLogin} value={loginValue}></MyInput>
            <MyInput placeholder='Введите пароль' type='password' />
            <MyButton>Войти</MyButton>
            <a href="https://www.example.com">У меня ёще нет аккуанта</a>
        </div>
    )

}