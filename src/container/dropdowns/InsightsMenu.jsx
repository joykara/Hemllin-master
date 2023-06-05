import React from 'react'

const InsightsMenu = () => {
    return (
        <>
          <div className="featured-insights-list">
                <h3>Featured Insights</h3>
                <p><strong> TRENDING TOPICS</strong></p>
            <ul>
                <li className='featured-insights-dropdown-item'>
                    <a href='/featured-insights/agriculture'>Agriculture</a>
                </li>
                <li className='featured-insights-dropdown-item'>
                    <a href='/featured-insights/automative'>Automative</a>
                </li>
                <li className='featured-insights-dropdown-item'>
                    <a href='/featured-insights/education'>Education</a>
                </li>
                <li className='featured-insights-dropdown-item'>
                    <a href='/featured-insights/agriculture'>Agriculture</a>
                </li>
                <li className='featured-insights-dropdown-item'>
                    <a href='/featured-insights/automative'>Automative</a>
                </li>
                <li className='featured-insights-dropdown-item'>
                    <a href='/featured-insights/education'>Education</a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default InsightsMenu