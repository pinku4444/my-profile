import React from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import './skills.scss';
import Skill from './skill';
import {label} from '../../../constant/constant'


const Skills = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                <Paper >
                    <h3 className="Skill">Skill : </h3>
                    <Skill color="primary" percentage="90" name={label.REACTJS}/>
                    <Skill color="primary" percentage="80" name={label.GRAPHQL} />
                    <Skill color="primary" percentage="70" name={label.REDUX}/>
                    <Skill color="primary" percentage="80" name={label.NODEJS} />
                    <Skill color="primary" percentage="70" name={label.REDUX}/>
                    <Skill color="secondary" percentage="40" name={label.MACHINE_LEARNING} />
                    <Skill color="primary" percentage="60" name={label.LARAVEL} />
                    <Skill color="primary" percentage="50" name={label.CODEIGNITER} />
                    <Skill color="primary" percentage="60" name={label.MONGODB} />
                    <Skill color="primary" percentage="80" name={label.MYSQL} />
                    <Skill color="primary" percentage="60" name={label.APOLLO_CLIENT} />
                    <Skill color="primary" percentage="95" name={label.APOLLO_SERVER} />
                    <Skill color="primary" percentage="65" name={label.EXPRESS} />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Skills;