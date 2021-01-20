import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import BurgerButton from './BurgerButton';
import TreeView from './TreeView';

const burgerMenuStyles = createUseStyles({
    hiddenSidebar : {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        background: 'rgb(243, 245, 252)',
    },
    hiddenContent : {
        order: '2',
        margin: '0 auto',
        width: '70%',
        padding: '2%',
        flexBasis: '10%',
        borderRadius: '3px',
        borderBottom: '2px solid black',
        '& h1' : {
            fontSize: '6.7vw',

        }
    },
    burgerContainer : {
        width: '30%',
        order: '1',
    },
    menu : open => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb(243, 245, 252)',
        height: '100vh',
        textAlign: 'left',
        padding: '2rem',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '4',
        transform: open ? 'translateX(0%)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out'
    }) 
})


const Menu = ({open, setOpen}) => {
    const classes = burgerMenuStyles(open);
    return(
        <div className={classes.menu}>
            <TreeView/>
        </div>
    )
}

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    const classes = burgerMenuStyles();
    return (
        <div className={classes.hiddenSidebar}>
          <div className={classes.burgerContainer}>
            <BurgerButton open={open} setOpen={setOpen}/>
          </div>
          <div className={classes.hiddenContent}>
            <h1>m.m.t</h1>
          </div>
          <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default BurgerMenu
