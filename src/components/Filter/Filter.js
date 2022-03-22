import './../../css/Filter/Filter.css'
const Filter = ({handelFilterSize , handelFilterOrder , productsNumber , size , sort}) => {
    return(  
        <div className='filter-wrapper'>
            <h2 className='filter-title'>Filter</h2>
            <div className='numProduct'>Number Of Products : {productsNumber} </div>
            <div className='filter-by-size'>
                <span>Filter</span>
                <select value={size} className='filter-select' onChange={handelFilterSize}>
                    <option value="ALL">ALL</option>
                    <option value="SM">SM</option>
                    <option value="MD">MD</option>
                    <option value="LG">LG</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div className='filter-by-size'>
                <span>Order</span>
                <select className='filter-select' onChange={handelFilterOrder} value={sort}>
                    <option value='latest'>Latest</option>
                    <option value='lowest'>Lowest</option>
                    <option value='highest'>Highest</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;