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
    description: `I’m Harry, I study theatre and performance at the
    University of Bristol and I’m a co-founder of multi.module.theatre. I’m
    currently developing my practice and I am very interested in how we can
    explore the internet through theatre.
    
    I also have experience working with children and disabled people in an
    applied theatre setting and believe passionately in grassroots, community
    orientated theatre, both on and offline! `,
    imgPath: 'harry.jpg',
    insta: 'harry.writesabit.walker',
    twitter: 'HarryWritesABit'
}

const lily = {
    name: 'lily',
    description: `My name is Lily and I’m the director of design at
    multi.modal.theatre. I graduated from UCA Farnham with a degree in
    animation and now collaborate with mmt as a resident artist. I work
    within a range of mediums, such as embroidery, illustration and digital
    design.`,
    imgPath: 'lily.jpg',
    insta: 'lily.draws.a.bit'
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
    description: `I'm Will, I study theatre performance at the University of
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
