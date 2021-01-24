import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import BurgerButton from './BurgerButton';
import logo from '../assets/logo.png'
import TreeViewMobile from './TreeViewMobile';
import disableScroll from 'disable-scroll';
import { Link } from 'react-router-dom';

const burgerMenuStyles = createUseStyles({
    hiddenSidebar : {
        height: '10vh',
        display: 'flex',
        flexDirection: 'row',
        background: 'rgb(243, 245, 252)',
        marginBottom: '2%'
    },
    hiddenContent : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        order: '2',
        width: '50%',
        padding: '2%',
        '& h1' : {
            fontSize: '6.7vw',

        },
        textDecoration: 'none',
        '& a' : {
            textDecoration: 'none'
        }
    },
    burgerContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        order: '1',
        zIndex: '8',
    },
    logoContainer : {
        order: 3,
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu : open => ({
        display: 'flex',
        flexDirection: 'column',
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
        transition: 'transform 0.3s ease-in-out',
    }) ,
    logoStyle : {
        maxWidth: '100%',
        maxHeight: '100%',
        padding: '20%'
    },   
    navbarPlaceholder: {
        height: '10%',
    },
    nameStyle : {
        textDecoration: 'none',
        color: 'black',
    }
})


const Menu = ({open, setOpen}) => {
    const classes = burgerMenuStyles(open);
    return(
        <div className={classes.menu}>
          <div className={classes.navbarPlaceholder}>
          </div>
            <h1 className="font-effect-3d"> files</h1>
            <TreeViewMobile open={open} setOpen={setOpen}/>
        </div>
    )
}

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    const classes = burgerMenuStyles();
    return (
        <div className={classes.hiddenSidebar}>
          <div onClick={() => {if (open === true){ setOpen(!open); disableScroll.off();}else{disableScroll.on(); setOpen(!open)}}} className={classes.burgerContainer}>
            <BurgerButton open={open} setOpen={setOpen}/>
          </div>
          <div  className={classes.hiddenContent}>
            <Link to={"/"}>
            <h1 className={`${classes.nameStyle} font-effect-3d`}>m.m.t</h1>
            </Link>
          </div>
          <div className={classes.logoContainer}> 
            <a href="/"><img className={classes.logoStyle} src={logo}/></a>
          </div>
          <div/>
          <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default BurgerMenu
