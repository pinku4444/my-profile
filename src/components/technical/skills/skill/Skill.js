import React from 'react';
import { LinearProgress } from '@material-ui/core';
import "./skill.scss";


const Skill = (props) => {
    return (
        <div className="Skill">
            <h4>{props.name}</h4>
            <LinearProgress
                variant="determinate"
                color={props.color}
                value={props.percentage}
            />
        </div>
    );
};

export default Skill;