import React from 'react'
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';
import disableScroll from 'disable-scroll';

const treeViewMobileStyles = createUseStyles({
    treeViewMobile : {
        textAlign: 'left',
        '& ul' :{
            paddingLeft: '0px'
        }
    },
})

const linkStyles = createUseStyles({
    linkStyle : {
        padding: '10px',
        fontSize: '5vw'
    },
    liI :{
        border: 'solid 2px grey',
        margin:  '2vh',
    }
})

const links = [
    {
        linkText: "home",
        url: "/"
    },
    {
        linkText : "projects",
        url : "/projects"
    },
    {
        linkText: "contributions",
        url: "/contributions"
    },
    {
        linkText : "about us",
        url :  "/aboutus"
    },
]

function link_to_list_close({open, setOpen}) {
    const classes = linkStyles();
    const link_to_list = link => {
        return(
            <li className={classes.liI}><Link onClick={() => {setOpen(!open); disableScroll.off();}} to={link.url}><div className={classes.linkStyle}>{link.linkText}</div></Link></li>
        )
    }
    return(link_to_list)
}


const TreeViewMobile = ({open, setOpen}) => {
    const classes = treeViewMobileStyles();
    const link_to_list = link_to_list_close({open, setOpen})
    return (
        <div className={classes.treeViewMobile}>
            <ul>
                {links.map(link_to_list)}  
            </ul>
        </div>
    )
}



export default TreeViewMobile;
