import { useState } from "react";
import './../../css/Form/Form.css';
import Fade from 'react-reveal/Fade';

const Form = ({showForm , setShowform}) => {

    const [value , setValue] = useState("")

/*#######################################################*/

    const submitOrder = (e) => {
        e.preventDefault()
        const order = {
            name : value.name ,
            email : value.email ,
        }
        console.log(order)
    }

/*#######################################################*/

    const handleChange = (e) => {
        setValue( (prevstate) => ({...prevstate , [e.target.name] : e.target.value}) )
    }

/*#######################################################*/

    return( 
        <>
            {
                showForm && (
                    <Fade right>
                        <div className='form'>
                            <span className='close-form' onClick={() => setShowform(false)}> &times; </span>
                            <form onSubmit={submitOrder} noValidate>
                                <div>
                                    <label> Name </label>
                                    <input type='text' required name="name" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label> Email </label>
                                    <input type='email' required name="email" onChange={handleChange}/>
                                </div>
                                <div>
                                    <button type='submit'> Checkout </button>
                                </div>
                            </form>
                        </div>
                    </Fade>
                )
            }
        </>
    );
}

export default Form;