/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import data from './data';
function App() {
  const [products , setProducts] = useState(data) ;
  const [size, setSize] = useState('') ;
  const [sort, setSort] = useState('') ;
  const [cartItem , setCartItem] = useState(JSON.parse(localStorage.getItem('cartItem')))

  useEffect(() => {
    localStorage.setItem('cartItem' , JSON.stringify(cartItem))
  } , [cartItem])
  const handelFilterSize = (e) => {
    setSize(e.target.value) ;

    if(e.target.value == "ALL"){
      setProducts(data)
    }else{
      let newProducts = data.filter((p) => p.sizes.indexOf(e.target.value) != -1) ;
      setProducts(newProducts)
    }
  }

  const handelFilterOrder = (e) => {
    let order = e.target.value ; 
    setSort(order)
    let newProducts = products.sort( function(a , b){
      if(order === "lowest"){
        return a.price - b.price
      }else if(order === "highest"){
        return b.price - a.price
      }else{
        return a.id < b.id ? 1 : -1
      }
    })
    setProducts(newProducts)
  }
  
  const addCart = (product) => {
    let cartItemClone = [...cartItem] ;
    let isProductExist = false ; 
    cartItemClone.forEach(p => {
      if(p.id == product.id){
        p.qun++ ;
        isProductExist = true
      }
    })
    if(!isProductExist){
      cartItemClone.push({...product , qun : 1})
    }
    setCartItem(cartItemClone)
  }
  
  const removeCart = (id) => {
    let cartItemClone = cartItem.filter(item => item.id !== id)
    setCartItem(cartItemClone) 
  }
  return (
    <div className='layout'>
      <Header/>
      <main>
        <div className='wrapper'>
          <Products products={products} addCart={addCart}/>
          <Filter 
            productsNumber = {products.length}
            handelFilterSize={handelFilterSize} 
            handelFilterOrder={handelFilterOrder}
            size={size} 
            sort={sort} 
          />
        </div>
        <Cart cartItem={cartItem} removeCart={removeCart}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
