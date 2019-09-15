import React from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import './Achievements.scss';
import Achievement from './achievement';
import Star from '../../assests/image/star1.jpg';
import Starp from '../../assests/image/star2.jpg';
import gold from '../../assests/image/gold.jpg';
import mern from '../../assests/image/course.jpg';

const Achievements = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                <Paper>
                    <h4 className="Achievements_Text ">Achievements</h4>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Achievement image={mern} headline="MERN CERTIFICATE"/>
                            
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Achievement image={Star} headline="STAR PERFORMER(NOV 2018)"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Achievement  image={Starp} headline="STAR PERFORMER(JUN 2018)" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Achievement image={gold} headline="BEST TEAM"/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Achievements;