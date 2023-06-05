import React from 'react';
import './article.css'

const Article = ({articleTitle, articleUrl, articleText}) => {
  return (
    <div className='article'>
      <a href={articleUrl}></a>
      <div className="article-image">
      </div>
      <div className="article-content">
        <h1>{articleTitle}</h1>
        <p>{articleText}</p>
      </div>
    </div>
  )
}

export default Article