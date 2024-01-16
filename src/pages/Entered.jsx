import { useNavigate } from "react-router-dom"
import Frame from "../img/Frame.png"
import "../moduls.css/LoginPage_modules.css"


export const Entered = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="enter__block">
                <h1>С возвращением!</h1>
                <p>Lorby - твой личный репетитор</p>
                <img src={Frame} alt="Stay at home" />
                <button className='go_out' onClick={() => navigate('/')}>Выйти</button>
            </div>
        </>
    )
}