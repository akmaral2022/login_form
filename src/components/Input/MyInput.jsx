import './MyInput.css';

export const MyInput = (props) => {
    return (
        <div>
            <input className='my_input' {...props} />
        </div>
    )
}