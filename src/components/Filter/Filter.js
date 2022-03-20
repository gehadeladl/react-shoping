import './../../css/Filter/Filter.css'
const Filter = () => {
    return(  
        <div className='filter-wrapper'>
            <h2 className='filter-title'>Filter</h2>
            <div className='numProduct'>Number Of Products : 4 </div>
            <div className='filter-by-size'>
                <span>Filter</span>
                <select className='filter-select'>
                    <option value='all'>ALL</option>
                    <option value='sm'>SM</option>
                    <option value='md'>MD</option>
                    <option value='lg'>LG</option>
                    <option value='xl'>XL</option>
                </select>
            </div>
            <div className='filter-by-size'>
                <span>Order</span>
                <select className='filter-select'>
                    <option value='latest'>Latest</option>
                    <option value='sm'>Lower</option>
                    <option value='highest'>Highest</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;