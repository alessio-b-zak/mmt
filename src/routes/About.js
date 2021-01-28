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
    },
  '@media only screen and (max-width: 600px)' :{
    peopleGrid : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
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
    description: `I'm a mathematician and programmer with an interest in
    producing interactive media to see how we can better explore and bring
    awareness to social issues. In my spare time I enjoy dissociating and
    reading.`,
    imgPath: 'kurf.jpg'
}

const will = {
    name: 'will',
    description: `I'm well, I study theatre performance at the University of
    Bristol, and I am the producer and co-creative director of
    multi.modal.theatre. I'm really excited to be working on theatre at a
    time when it's got incredibly hard to do so. The piece we are developing
    is also incredibly relevant for the current political climate, so it's
    been really interesting to dive into that side of the world.`,
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
