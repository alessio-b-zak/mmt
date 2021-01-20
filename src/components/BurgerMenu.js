import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import BurgerButton from './BurgerButton';

const burgerMenuStyles = createUseStyles({
    hiddenSidebar : {
        height: '100%'
    },
    hiddenContent : {
        background: 'rgb(243, 245, 252)',
        margin: '0 auto',
        width: '100%',
        padding: '2%',
        flexBasis: '10%',
        borderRadius: '3px',
        borderBottom: '2px solid black',
        '& h1' : {
            fontSize: '6.7vw'
        }
    }
})

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    const classes = burgerMenuStyles();
    return (
        <div className={classes.hiddenSidebar}>
          <div className={classes.hiddenContent}>
            <h1>m . m . t</h1>
          </div>
          <BurgerButton/>
        </div>
    )
}

export default BurgerMenu
