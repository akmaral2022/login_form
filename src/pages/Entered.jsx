import { useNavigate } from "react-router-dom"
import Frame from "../img/Frame.png"

export const Entered = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="block Poster centered">
                <h1>С возвращением!</h1>
                <img src={Frame} alt="Stay at home" />
                <p className='go_out' onClick={() => navigate('/')}>Выйти</p>
            </div>
        </>
    )
}