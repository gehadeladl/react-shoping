import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import data from './data'
function App() {
  const [products, setProducts] = useState(data)
  return (
    <div className='layout'>
      <Header/>
      <main>
        <div className='wrapper'>
            <Products products={products}/>
            <div className='filterEl'>Filter</div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
