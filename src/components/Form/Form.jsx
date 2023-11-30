import { MyButton } from "../Button/MyButton"
import { MyInput } from "../Input/MyInput"
import './Form.css'

export const CustomForm = () => {
    return (

        <div className="form_login">
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' />
            <MyInput placeholder='Введите пароль' type='password' />
            <MyButton>Войти</MyButton>
            <a href="https://www.example.com">У меня ёще нет аккуанта</a>
        </div>
    )
}