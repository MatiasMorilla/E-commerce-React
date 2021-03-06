/* CUSTOM STYLES */
import './itemListContainer.css';
/* COMPONENTS */
import ItemList from '../itemList/itemList';
import ItemFilter from '../itemFilter/itemFilter';
import { useState} from 'react';
import { useParams } from 'react-router';
import ItemFooter from '../itemFooter/itemFooter';



const ItemListContainer = () => 
{
    const [rangeValue, setRangeValue] = useState([0, 19000]);
    const [rangeSize, setRangeSize] = useState(0);
    const {searchValue} = useParams();

    const handleRangeValue = (event, value) => {
        setRangeValue(value);
    }

    const handleRangeSize = (event, value) => {
        setRangeSize(value);
    }
    
    const handleResetFilters = () => {
        setRangeSize(0);
        setRangeValue([0, 19000]);
    }


    return(
        <>
            {
                searchValue == undefined ? "" : <h1 className="search-title">Resultados para la busqueda de: {searchValue}</h1> 
            }
            <div className="itemListContainer">
                <ItemFilter rangeValue={rangeValue} rangeSize={rangeSize} handleRangeValue={handleRangeValue} handleRangeSize={handleRangeSize} handleResetFilters={handleResetFilters} />
                <ItemList rangeValue={rangeValue} rangeSize={rangeSize} searchValue={searchValue} />
            </div>
            <ItemFooter />
        </>
        
    );
}

export default ItemListContainer;