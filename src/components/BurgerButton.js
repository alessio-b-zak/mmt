import React from 'react'
import disableScroll from 'disable-scroll';
import {createUseStyles} from 'react-jss';


const burgerButtonStyles = createUseStyles({
    burgerButton : {
        position: 'absolute',
        top: '3%',
        left: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '2rem',
        height: '2rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        zIndex: '10',
        '&:focus' : {
            outline: 'none'
        },
        '& div' : {
            width: '2rem',
            height: '0.25rem',
            background: 'grey',
            borderRadius: '10px',
            transition: 'all 0.3s linear',
            position: 'relative',
            transformOrigin: '1px'
        }
    }
})

const BurgerButton = ({open, setOpen}) => {
    const classes = burgerButtonStyles();
    return (
        <div onClick={() => {if (open === true){ setOpen(!open); disableScroll.off();}else{disableScroll.on(); setOpen(!open)}}} className={classes.burgerButton}>
           <div/> 
           <div/> 
           <div/> 
        </div>
    )
}

export default BurgerButton
