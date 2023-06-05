/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './highlight.css';

const Highlight = ({number, label, labelLink}) => {
  return (
        <>
            <li className='highlight-bar__item'>
              <p>{number}</p>
              <div className="highlight-item-title">
                <a href={labelLink}><span>{label}</span></a>
              </div>
            </li>
        </>
  )
}

export default Highlight