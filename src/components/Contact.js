import React from 'react'
import {createUseStyles} from 'react-jss';
import download from "../assets/download.jpeg"


const contactStyles = createUseStyles({
    contactContainer : {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid black 1px',
        padding: '10px',
        margin: '2%',
        width: '200px'

    },
    personImage :{
        maxWidth : '100%',
        maxHeight : '100%',
        border: 'solid black 1px',
        padding: '5px',

    },
    box: {
        margin: '2px',
        border: 'solid black 1px',
        padding: '10px',

    }
})


const Contact = () => {
    const classes = contactStyles()
    return (
        <div className={classes.contactContainer}>
            <img className={classes.personImage} src={download}/>
            <div className={classes.box}>brian</div>
            <div className={classes.box}>the chillest guy</div>
        </div>
    )
}

export default Contact
