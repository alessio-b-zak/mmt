import React from 'react'
import {createUseStyles} from 'react-jss';
import Contact from "../components/Contact"

const aboutStyles = createUseStyles({
    peopleGrid : {
        marginTop: '2%',
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const harry = {
    name: 'harry',
    description: 'omg',
    imgPath: 'harry.jpg'
}

const lily = {
    name: 'lily',
    description: 'ftw',
    imgPath: 'lily.jpg'
}

const kurf = {
    name: 'kurf',
    description: 'lol',
    imgPath: 'kurf.jpg'
}

const will = {
    name: 'will',
    description: 'lmao',
    imgPath: 'will.jpg'
}

const About = () => {
    const classes = aboutStyles();
    return (
        <div className={classes.aboutViewer}>
           <h1 className="font-effect-3d">Who are we?</h1> 
           {/* grid here with our pictures and links */}
           <div className={classes.peopleGrid}>
                <Contact {...harry}/> 
                <Contact {...lily}/> 
                <Contact {...kurf}/> 
                <Contact {...will}/> 
           </div>
        </div>
    )
}

export default About
