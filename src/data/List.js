import { React } from 'react';
import data from "./MOCK_DATA.json";
import './List.css';
import { Link } from 'react-router-dom';

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().startsWith(props.input)
        }
    })
    return (
        <ul className='search-bar__list'>
            {filteredData.map((item) => (
                <li key={item.id} className='search-bar__item'><Link to={item.link_url}>{item.text}</Link></li>
            ))}
            {/* if item not found display not found message */}
            {filteredData.length === 0 && <li className='search-bar__item'>Not Found</li>}
        </ul>
    )
}

export default List