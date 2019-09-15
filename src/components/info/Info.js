import React from 'react';
import { label } from '../../constant/constant';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import './info.scss';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const Info = () => {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={8}>
                        <Paper className="Carrer">
                            <h4>{label.ABOUT_ME} :</h4>
                            <div className="Carrer-text">
                                {label.ABOUT_ME_LINE_1}
                            </div>
                            <div className="Carrer-text">
                                {label.ABOUT_ME_LINE_2}
                            </div>
                            <div className="Carrer-text">
                                {label.ABOUT_ME_LINE_3}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className="Carrer">
                            <Grid container spacing={3} >
                                <Grid item md={2}>
                                    <div className="Email">
                                        <EmailIcon className="Margin-bottom" color="action" />
                                    </div>
                                    <div className="Email">
                                        <LocalPhoneIcon  color="action" />
                                    </div>
                                    <div className="Email">
                                        <AddLocationIcon />
                                    </div>

                                </Grid>
                                <Grid item md={10}>
                                    <h3 className="Margin-bottom-text">{label.EMAIL}</h3>
                                    <h3 className="Margin-bottom-text">{label.PHONE}</h3>
                                    <h3>{label.LOCATION}</h3>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Info;