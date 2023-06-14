import React from 'react'
import { Link } from 'react-router-dom'

const Cta = ({ctaTitle, ctaLink1, ctaLink1Text, ctaLink2, ctaLink2Text}) => {
  return (
    <>
        <div className="cta-container">
            <div className="cta-content">
                <h3>{ctaTitle}</h3>
                <div className="cta-content__buttons">
                  <button type='button'><Link to={ctaLink1}>{ctaLink1Text}</Link></button>
                  <button type='button'><Link to={ctaLink2}>{ctaLink2Text}</Link></button>
                </div>
            </div>
        </div>

    </>
  )
}

export default Cta