import React from 'react'
import disableScroll from 'disable-scroll';
import {createUseStyles} from 'react-jss';


const burgerButtonStyles = createUseStyles({
    burgerButton : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '2rem',
        height: '2rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        margin: '10px',
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
    },
    firstLine : open => ({
        transform: open ? 'rotate(45deg)' : 'rotate(0)'
    }),
    secondLine : open => ({
        transform: open ? 'translateX(20px)' : 'translateX(0)' ,
        opacity: open ? '0' : '1',
    }),
    thirdLine : open => ({
        transform: open ? 'rotate(-45deg)' : 'rotate(0)'
    })
})

const BurgerButton = ({open, setOpen}) => {
    const classes = burgerButtonStyles(open);
    return (
        <div onClick={() => {if (open === true){ setOpen(!open); disableScroll.off();}else{disableScroll.on(); setOpen(!open)}}} className={classes.burgerButton}>
           <div className={classes.firstLine}/> 
           <div className={classes.secondLine}/> 
           <div className={classes.thirdLine}/> 
        </div>
    )
}

export default BurgerButton
