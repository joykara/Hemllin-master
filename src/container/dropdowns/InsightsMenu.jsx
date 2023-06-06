import React from 'react'

const InsightsMenu = () => {
    return (
        <>
            <div className="featured-insights-list">
                    <h3>Featured Insights</h3>
                    <p><strong> TRENDING TOPICS</strong></p>
                <ul>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/ai'>Artificial Intelligence</a>
                    </li>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/automative'>Cloud Capabilities</a>
                    </li>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/education'>Glocal Recruitment</a>
                    </li>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/agriculture'>Retention Strategies</a>
                    </li>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/automative'>ESG Measures</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default InsightsMenu