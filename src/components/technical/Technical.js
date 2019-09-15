import React,{Fragment} from 'react';
import Projects from './projects';
import Grid from '@material-ui/core/Grid';
import Skills from './skills';

const Technical = () => {
    return (
        <Fragment>
            <Grid container spacing={3} >
                <Grid item xs={12} md={8}>
                    <Projects />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Skills />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Technical;