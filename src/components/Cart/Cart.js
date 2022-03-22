/* eslint-disable jsx-a11y/alt-text */
import './../../css/Cart/Cart.css'
const Cart = ({cartItem , removeCart}) => {
    return(  
        <div className="cart-wrapper">
            <div className="cart-title"> {cartItem.length === 0 ? 'Empty Card' : ` There Is ${cartItem.length} Products In Cart `} </div>
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
        </div>
    );
}
export default Cart;