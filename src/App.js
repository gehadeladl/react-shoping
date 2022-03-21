/* eslint-disable eqeqeq */
import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import data from './data';
function App() {
  const [products , setProducts] = useState(data) ;
  const [size, setSize] = useState('') ;
  const [sort, setSort] = useState('') ;

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

  return (
    <div className='layout'>
      <Header/>
      <main>
        <div className='wrapper'>
          <Products products={products}/>
          <Filter 
            handelFilterSize={handelFilterSize} 
            handelFilterOrder={handelFilterOrder}
            size={size} 
            sort={sort} 
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
