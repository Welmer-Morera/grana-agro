import React from 'react';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles';
import ContactStyles from '../../styles/ContactStyles'


const useStyles = makeStyles(ContactStyles)
const Contact = () => {
    const classes = useStyles()

   
    return (  
      

        <div className={classes.container}>



            <Grid container >


            <Grid item xs={12} sm={6} className={classes.containerText}>
                <div className={classes.containerTextS} >
                    <div className={classes.textTwo}>Contac</div>
                    <div className={classes.textOne}>
                        info contact
                    </div>
                    
                </div>
            </Grid>
                <Grid item xs={12} sm={6}>
                    <Hidden xsDown>
                        <div className={classes.imgContainer}></div>
                    </Hidden>
                </Grid>
                

            </Grid>

        </div>

    
           
    
        
    );
}
 
export default Contact;