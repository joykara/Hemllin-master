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
                        <a href='/featured-insights/cloud-capabilities'>Cloud Capabilities</a>
                    </li>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/global-recruitment'>Global Recruitment</a>
                    </li>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/retention/strategies'>Retention Strategies</a>
                    </li>
                    <li className='featured-insights-dropdown-item'>
                        <a href='/featured-insights/ESG-measures'>ESG Measures</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default InsightsMenu