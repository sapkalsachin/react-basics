import React from 'react';
import './styles.css';
const Stats = ({ stats }) => {
    if (!stats) {
        return <span className="stats">Loading...</span>;
    }
    return(
        <span className="stats">
            {stats.error && '😖'}
            {stats.isLoading && '⏳'}
            {stats.downloads !== null && `🔽${stats.downloads}`}
        </span>
    )
};

export default Stats;