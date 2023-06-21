import React from 'react';
import './article.css'
import { Link } from 'react-router-dom';

const Article = ({articleTitle, articleUrl, articleText}) => {
  return (
    <div className='article'>
      <div className="article-image">
      </div>
      <div className="article-content">
        <h3><Link to={articleUrl}>{articleTitle}</Link></h3>
        <p>{articleText}</p>
      </div>
    </div>
  )
}

export default Article