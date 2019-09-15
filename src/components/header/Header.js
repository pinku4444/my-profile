import React from 'react';
import './header.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import myImage from '../../assests/image/profile.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Header = () => {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Paper className="Header">
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={3}>
                            <Avatar src={myImage} alt="Remy Sharp" className="Avatar"  />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <div>
                                <h1>Pinku Kumar</h1>
                                <h3>(Full stack Developer)</h3>
                                 <a href="https://www.linkedin.com/in/pinku-kumar-34b96378" target="_blank">
                                    <LinkedInIcon className="Linked" fontSize="large"  />
                                </a>
                                <a href="https://www.facebook.com/pinku4444" target="_blank">
                                    <FacebookIcon className="Linked" fontSize="large" />
                                </a>
                                
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Header;