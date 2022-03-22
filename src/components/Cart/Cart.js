/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Form from '../Form/Form';
import './../../css/Cart/Cart.css';
import Fade from 'react-reveal/Fade';

const Cart = ({cartItem , removeCart}) => {
    const [showForm , setShowform] = useState(false) ; 

//############################################

    return(  
        <div className="cart-wrapper">
            <div className="cart-title"> {cartItem.length === 0 ? 'Empty Card' : ` There Is ${cartItem.length} Products In Cart `} </div>
            <Fade bottom cascade>
                <div className="cart-items">
                    {
                        cartItem.map((item) => {
                            return(
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} />
                                    <div className="cart-info">
                                        <div>
                                            <p> {item.title} </p>
                                            <p> {item.qun} </p>
                                            <p> {item.price} $ </p>
                                        </div>
                                        <button onClick={() => removeCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Fade>

{/*#######################################################*/}

            {
                cartItem.length !== 0 && (
                    <div className='cart-footer'>
                        <div className='total'>Total Price : {cartItem.reduce((acc , p) => {
                            return acc + p.price 
                        } , 0)} $</div>
                        <button onClick={() => setShowform(true)}>Select Products</button>
                    </div>
                )
            }

{/*#######################################################*/}

            <Form showForm={showForm} setShowform={setShowform} />
        </div>
    );
}
export default Cart;