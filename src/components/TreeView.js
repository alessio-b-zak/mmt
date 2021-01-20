import React from 'react'
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

const links = [
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

const link_to_list = link => {
    return(
        <li><Link to={link.url}>{link.linkText}</Link></li>
    )
}

const treeViewStyles = createUseStyles({
    treeView: {
        textAlign: 'left'
    }
})


const TreeView = props => {
    const classes = treeViewStyles();
    return (
        <div className={classes.treeView}>
            <ul>
                {links.map(link_to_list)}  
            </ul>
        </div>
    )
}

export default TreeView
