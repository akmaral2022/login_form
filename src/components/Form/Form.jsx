import { MyInput } from "../Input/MyInput"

export const CustomForm = () => {
    return (

        <div className="form">
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' />
            <MyInput placeholder='Введите пароль' />

        </div>
    )
}