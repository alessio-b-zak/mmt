import React from 'react'
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

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
    const link_to_list = link => {
        return(
            <li><Link onClick={() => setOpen(!open)} to={link.url}>{link.linkText}</Link></li>
        )
    }
    return(link_to_list)
}

const treeViewMobileStyles = createUseStyles({
    treeViewMobile : {
        textAlign: 'left'
    }
})


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
