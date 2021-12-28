import React from 'react'
import ProjectEntry from '../components/ProjectEntry'
import {createUseStyles} from 'react-jss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams 
} from "react-router-dom";

const contributionsStyles = createUseStyles({
    contributionsStyle : {
        fontSize: '3.6vh'
    }
})

const qanon = {
    title: '"Those People": A play about Qanon',
    imgPath: 'qanon_header.jpg',
    description: 'A verbatim play about Qanon and youth in the UK and around the world',
    tags: ['qanon'],
    url: '/qanon'
}


const Projects = () => {
    const classes = contributionsStyles();
    let { path, url } = useRouteMatch();

    return (
        <div>
        <h1 className={`${classes.contributionsStyle} font-effect-3d`}>Projects</h1>
        <ProjectEntry {...qanon}/>
        </div>
    )
}

export default Projects
