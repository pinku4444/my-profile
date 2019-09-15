import React, { Fragment } from 'react';
import kredin from '../../../assests/image/kredin.png';
import funeral from '../../../assests/image/insider.png'
import Project from './project';
import { label } from '../../../constant/constant';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import wallmart from '../../../assests/image/wallmart.png';
import dentsu from '../../../assests/image/dentsu.jpeg'
import './projects.scss'

const Projects = () => {
    return (
        <Fragment>
            <Paper>
                <h3 className="P_UNDERTAKEN">{label.PROJECT_UNDERTAKEN} :</h3>

                <Project projectImg={kredin} projectName={label.KREDIN} description={label.KREDIN_DESC} />
                <Divider variant="inset" component="li" />
                <Project projectImg={funeral} projectName={label.FUNERAL} description={label.FUNERAL_DESC} />
                <Divider variant="inset" component="li" />
                <Project projectImg={wallmart} projectName={label.WALLMART_MERCHANT_NEGOTATION} description={label.WALLMART_DESC} />
                <Divider variant="inset" component="li" />
                <Project projectImg={dentsu} projectName={label.DENTSU} description={label.DENTSU_DESC} />
            </Paper>
        </Fragment>

    );
};

export default Projects;