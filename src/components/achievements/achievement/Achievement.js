import React from 'react';
import './achievement.scss';

const Achievement = (props) => {
    return (
        <div className="Achievement">
            <img src={props.image} alt="img" className="Image" />
            <h3>{props.headline} </h3>
        </div>
    );
};

export default Achievement;