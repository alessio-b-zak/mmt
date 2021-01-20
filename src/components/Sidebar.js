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
        marginTop: '5vh'
    },
    logo: {
        height: '20vh',
        width: '20vh',
        margin: '1%',
        position: 'sticky',
        marginRight: '0.5vw'
    },
    floatingSidebar: {
        width: '60%',
        minWidth: '180px',
        paddingTop: '2%',
        height: '30vh',
        marginRight: '0.5vw',
        background: 'rgb(243, 245, 252)',
        textAlign: 'center',
        borderRadius: '3px'
    }
})

const Sidebar = props => {
   const classes = sidebarStyles();
   return (
        <div className={classes.leftColumn}>
            <div className={classes.contentContainer}>
                <a href="/"><img className={classes.logo} src={logo}/></a>
                <div className={classes.floatingSidebar}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
