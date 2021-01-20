import React from 'react'
import {createUseStyles} from 'react-jss'

const textboxStyles = createUseStyles({
    textbox: {
        border: 'solid black 1px',
        padding: '10px',
    }
})


const Textbox = props => {
    const classes = textboxStyles();
    return (
        <div className={classes.textbox}>
           {props.children}
        </div>
    )
}

export default Textbox
