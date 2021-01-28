import React from 'react'
import {createUseStyles} from 'react-jss';
import download from "../assets/download.jpeg"


const contactStyles = createUseStyles({
    contactContainer : {
        display: 'flex',
        flexDirection: 'row',
        border: 'solid black 1px',
        margin: '1%',
        width: '48%',
        fontSize: '13px',

    },
    personImage :{
        maxWidth : '100%',
        maxHeight : '100%',
        padding: '10px',

    },
    imageContainer :{
        order:'1',
        width: '40%',
    },
    box: {
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '60%',
        order:'2'
    },
  '@media only screen and (max-width: 600px)' :{
    contactContainer : {
        width: '100%',
    },
    box : {
        width: '70%'
    }
  }
})

const Contact = props => {
    const classes = contactStyles()
    return (
        <div className={classes.contactContainer}>
            <div className={classes.imageContainer}>
            <img className={classes.personImage} src={require("../assets/" + props.imgPath).default}/>
            </div>
            <div className={classes.box}>
                <u>{props.name}</u>
                <br/>
                <br/>
                {props.description}
                </div>
        </div>
    )
}

export default Contact
