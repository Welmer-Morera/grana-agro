import React, { Fragment, useState } from 'react'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from "@material-ui/icons"
import SideDrawerStyles from '../../styles/SideDrawerStyles'
import { Link, animateScroll as scroll } from "react-scroll"
const useStyles = makeStyles(SideDrawerStyles)

const SideDrawer = ({ navLinks }) => {

  const classes = useStyles()
  const [menu, setMenu] = useState({ right: false })

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const toggleDrawer = (anchor, open) => e => {
    if (
      e.type === "keydown" &&
      (e.key === "Tab" || e.key === "Shift")
    ) {
      return;
    }

    setMenu({ [anchor]: open });
  };

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (

          <Link className={classes.linkText}
            activeClass="active"
            to={path}
            key={title}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => scrollToTop()}
          >
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>


          </Link>
        
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={menu.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </Fragment>
  );
}

export default SideDrawer;