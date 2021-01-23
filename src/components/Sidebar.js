import {createUseStyles} from 'react-jss';
import logo from "../assets/logo.png"

const sidebarStyles = createUseStyles({
    leftColumn: {
        order: '1',
        width: '25%',
        marginLeft: '10px',
    },
    contentContainer: {
        top: '5vh',
        position: 'sticky',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    logo: {
        height: 'auto',
        width: '80%',
        marginLeft: 'auto',
        marginRight: '2'
    },
    floatingSidebar: {
        width: '60%',
        minWidth: '180px',
        paddingTop: '2%',
        height: '30vh',
        background: 'rgb(243, 245, 252)',
        textAlign: 'center',
        borderRadius: '3px'
    },
    logoContainer : {
        width: '60%'
    }
})

const Sidebar = props => {
   const classes = sidebarStyles();
   return (
        <div className={classes.leftColumn}>
            <div className={classes.contentContainer}>
                <a className={classes.logoContainer} href="/"><img className={classes.logo} src={logo}/></a>
                <div className={classes.floatingSidebar}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
