import { LoginForm } from "../components/LoginForm/LoginForm"
import Frame from "../img/Frame.png"
import "../moduls.css/LoginPage_modules.css"

export const LoginPage = () => {
    return (
        <div className="login__page">
            <div className="login__poster">
                <img src={Frame} alt="Stay at home" />
                <h1>Lorby</h1>
                <h3>Твой личный репетитор</h3>
            </div>
            <div className="login__place">
                <LoginForm />
            </div>
        </div>
    )

}