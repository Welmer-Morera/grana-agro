import React,{ useState,useEffect, useRef} from 'react'
import {
    AppBar,
    Container,
    Hidden,
    List,
    ListItem,
    Toolbar,
  
  } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll" 
import { makeStyles } from '@material-ui/core/styles';
import HeaderStyles from '../../styles/HeaderStyles'
import HideOnScroll from './HideOnScroll'
import SideDrawer from './SideDrawer'

const useStyles = makeStyles(HeaderStyles)
const navLinks = [
    { title: `Quiénes Somos`, path: "about" },
    { title: `Productos`, path: "product" },
    { title: `Contacto`, path: "contact" },
    
  ];

  
  
const Header = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const [navColor, setnNavColor] = useState('appIntial')
      

      const ref = useRef()
      ref.current=navColor

      useEffect(() => {
       const handleScroll =()=>{
         const show= window.scrollY >310
         if(show){
          setnNavColor('appScroll')
          
         }else{
           setnNavColor('appIntial')
           
         }
       }
       document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
      }, [])



    const classes =useStyles()
    return ( 
        <div className={classes.root}>
          <HideOnScroll>
            <AppBar position="fixed" className={classes[ref.current]}>
              <Toolbar  id="back-to-top-anchor">
                <Container className={classes.navbarDisplayFlex}>
                <List className={classes.navListDisplayFlexGA}>
                      <ListItem button className={classes.linkText}>
                        <Link
                          activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={()=>scrollToTop()}
                        >
                        Grana|agro
                        </Link>
                            
                      </ListItem>
                </List>
                            
                             
                            
                            
                  

                  <Hidden smDown>
                    <List className={classes.navListDisplayFlex}>
                      <ListItem button className={classes.linkText}>
                        <Link
                          activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                           Quiénes Somos
                          </Link>
                      </ListItem>
                      <ListItem button className={classes.linkText}>
                      <Link
                          activeClass="active"
                          to="product"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Productos
                          </Link>
                      </ListItem>
                      <ListItem button className={classes.linkText}>
                      <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Contacto
                          </Link>
                      </ListItem>


                    </List>
                  </Hidden>

                  <Hidden mdUp>
                      <SideDrawer navLinks={navLinks} />
                  </Hidden>
                </Container>
              </Toolbar>
             </AppBar>
            </HideOnScroll>
           

      
           
        </div>
     );
}
 
export default Header;