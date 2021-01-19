import {createUseStyles} from 'react-jss';
import logo from "../assets/logo.png"

const sidebarStyles = createUseStyles({
    leftColumn: {
        order: '1',
        flexBasis: '25%',
        display: 'flex',
        marginLeft: '10px',
        justifyContent: 'flex-end',
        flexShrink: '1',
        flexGrow: '1',
    },
    contentContainer: {
        top: '0',
        position: 'sticky',
        height: '100vh',
    },
    logo: {
        height: '25vh',
        width: '25vh',
        margin: '1%',
        position: 'sticky',
        marginRight: '0.5vw'
    },
    floatingSidebar: {
        width: '60%',
        minWidth: '220px',
        paddingTop: '2%',
        height: '60vh',
        marginRight: '0.5vw',
        background: 'rgb(243, 245, 252)',
        textAlign: 'left',
        borderRadius: '3px'
    }
})

const Sidebar = props => {
   const classes = sidebarStyles();
   return (
        <div className={classes.leftColumn}>
            <div className={classes.contentContainer}>
                <img className={classes.logo} src={logo}/>
                <div className={classes.floatingSidebar}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
