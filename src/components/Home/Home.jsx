import React, { Fragment } from 'react'
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import HomeStyles from '../../styles/HomeStyles'
import { Spring } from "react-spring"
import Animation from '../layout/Animation'
//import { useSpring, animated } from 'react-spring'
const useStyles = makeStyles(HomeStyles)
const Home = () => {
    const classes = useStyles()


    return (
        <Fragment >
            <Spring
                from={{ opacity: 0, marginTop: -1000 }}
                to={{ opacity: 1, marginTop: 0 }}
            >
                {(props)=>(
                    <div className={classes.imgContainer} style={props}>
                    <Container maxWidth="sm">
                        <header className={classes.header}>
                            <h1 className={classes.h1}>GRANA AGRO</h1>
                            <Animation />
                        </header>


                    </Container>

                </div>


                )}
                
            </Spring>
        </Fragment>


    );
}

export default Home;