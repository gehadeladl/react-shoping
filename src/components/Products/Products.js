/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Modal from 'react-modal';
import './../../css/Products/Products.css';
import Fade from 'react-reveal/Fade';

const Products = ({products , addCart}) => {
    const [pro, setPro] = useState("")

/*#######################################################*/

    const openModal = (pro) => {
        setPro(pro)
    }

/*#######################################################*/

    const closeModal = () => {
        setPro('')
    }

/*#######################################################*/

    return( 
        <Fade  left cascade>
            <div className='product-wrapper'> 
                {
                    products.map((product , index) => {
                        return(
                            <div key={product.id} className='product-item'>
                                <a href='#' onClick={() => openModal(product)}>
                                    <img src={product.image} />
                                </a>
                                <div className='product-desc'>
                                    <p> {product.title} </p>
                                    <p> {product.price} $</p>
                                </div>
                                <button className='addCart' onClick={() => addCart(product)}>Add To Cart</button>
                            </div>
                        )
                    })
                } 
                
{/*#######################################################*/}

                <Modal isOpen={pro} onRequestClose={closeModal}>
                    <div className='product-info'>
                        <span onClick={closeModal}> &times; </span>
                        <img src={pro.image} />
                        <p> {pro.title} </p>
                        <p> {pro.desc} </p>
                        <p>Price : {pro.price} $</p>
                    </div>
                </Modal>
            </div>
        </Fade>
        
    );
}

export default Products;