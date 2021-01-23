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

const Contact = props => {
    const classes = contactStyles()
    return (
        <div className={classes.contactContainer}>
            <img className={classes.personImage} src={require("../assets/" + props.imgPath).default}/>
            <div className={classes.box}>{props.name}</div>
            <div className={classes.box}>{props.description}</div>
        </div>
    )
}

export default Contact
