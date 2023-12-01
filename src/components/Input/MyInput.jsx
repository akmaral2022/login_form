import './MyInput.css';

export const MyInput = (props) => {
    return (
        <div className='input__block'>
            <input className='my_input' {...props} />
        </div>
    )
}