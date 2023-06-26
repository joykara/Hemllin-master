import React, { useState, useReducer } from 'react';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';
import List from '../../data/List';
import './searchbar.css';

const SearchBar = () => {
    // SEARCH FUNCTIONALITY
    const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case 'inputText':
          return {
          ...state,
            inputText: action.payload,
          };
        case'showData':
          return {
          ...state,
            showData: action.payload,
          };
        default:
          return state;
      }
    }, {
      inputText: '',
      showData: '',
    });
  
    const { inputText, showData } = state;
  
    const handleInputText = (e) => {
      dispatch({ type: 'inputText', payload: e.target.value });
    };
    
    const handleShowData = (e) => {
      dispatch({ type: 'showData', payload: e.target.value });
    };
    
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      dispatch({ type: 'inputText', payload: lowerCase });
    };
    // SEARCHBAR DISPLAY FUNCTION
    const [showSearchBar, setShowSearchBar] = useState(false);
    const handleShowSearchBar = () => {
      setShowSearchBar(showSearchBar);
    };

  return (
    <>
      
        <div className="navbar__menu-links__searchbar">
          <input name='search' type="text" onChange={inputHandler} onClick={handleInputText} onKeyUp={handleShowData} placeholder="Type to search..." />
          <button onClick={handleShowSearchBar}><RiCloseLine size={45} /></button>
          <button><RiSearchLine size={40} /></button>
        </div>
        {showData && (
            <div className={`navbar__menu-links__searchbar-results__container ${showData ? 'display' : ''}`}>
              <List input={inputText} />
            </div>
        )}
    </>
  )
}

export default SearchBar;
