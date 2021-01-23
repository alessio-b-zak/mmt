import React from 'react'
import {createUseStyles} from 'react-jss';
import Contact from "../components/Contact"

const aboutStyles = createUseStyles({
    peopleGrid : {
        marginTop: '10%',
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const About = () => {
    const classes = aboutStyles();
    return (
        <div className={classes.aboutViewer}>
           <h1 className="font-effect-3d">Who are we?</h1> 
           {/* grid here with our pictures and links */}
           <div className={classes.peopleGrid}>
                <Contact/> 
                <Contact/> 
                <Contact/> 
                <Contact/> 
           </div>
        </div>
    )
}

export default About
