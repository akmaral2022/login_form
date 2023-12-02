import { MyButton } from "../Button/MyButton"
import { MyInput } from "../Input/MyInput"
import './Form.css'
import { useState } from "react"

export const CustomForm = () => {

    const [passwordItem, setPasswordItem] = useState('')
    function passwordChange(e) {
        setPasswordItem(e.target.value.split('').map(() => '*').join(''))
    }

    return (
        <div className="form_login">
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' />
            <MyInput placeholder='Введите пароль' type='password' value={passwordItem} onChange={passwordChange} />
            <MyButton>Войти</MyButton>
            <a href="https://www.example.com">У меня ёще нет аккуанта</a>
        </div>
    )

}