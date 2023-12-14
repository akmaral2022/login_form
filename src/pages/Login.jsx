import React from "react"
import { useState } from "react"
import { MyInput } from "../components/Input/MyInput"

export function Login() {
    const [User, setUser] = useState({
        userLigon: '',
        userPassword: ''
    })
    return (
        <div>
            <h1>Welcome Back!</h1>
            <MyInput placeholder='Введите логин' />
        </div>
    )
}