import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import './project.scss';

const Project = (props) => {
    return (

        <Grid container>
            <Grid item xs={12} md={12}>
                <Paper className="AllProject">
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <div>
                                <img src={props.projectImg} alt="img" className="ProjectImg" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <h4 className="ProjectText">{props.projectName}</h4>
                            <div className="projDesc">
                                {props.description}
                            </div>
                            
                            
                            
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    );
};

export default Project;