/* eslint-disable jsx-a11y/alt-text */
import './../../css/Products/Products.css'
const Products = ({product}) => {
    return( 
        <div className='product-wrapper'> 
            {
                product.map(({id , image , title , price} , index) => {
                    return(
                        <div key={id} className='product-item'>
                            <img src={image} />
                            <div className='product-desc'>
                                <p> {title} </p>
                                <p> {price} </p>
                            </div>
                            <button className='addCart'>Add To Cart</button>
                        </div>
                    )
                })
            } 
        </div>
    );
}

export default Products;