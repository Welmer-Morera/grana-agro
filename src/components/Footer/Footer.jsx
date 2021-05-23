import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import FooterStyles from '../../styles/FooterStyles'
import img from '../../img/logi2.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles  = makeStyles(FooterStyles)
const Footer = () => {
 
    const classes = useStyles()
    return ( 
    <footer className={classes.footer}>
    <div>
    <span className={classes.footer_text}>Corpyright  &#169;{new Date().getFullYear()} 
     | Powered by <img  className={classes.logo}src={img} alt="logo>"></img></span>
    </div>
     <div>
       <FacebookIcon  fontSize="large" />
       <GitHubIcon  fontSize="large" />
       <InstagramIcon  fontSize="large" />
     </div>
  </footer> 
  );
}
 
export default Footer;