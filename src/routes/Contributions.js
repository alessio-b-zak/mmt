import React from 'react'
import ProjectEntry from '../components/ProjectEntry'
import {createUseStyles} from 'react-jss';
import LilyAnimation from './Contribs/Lily'

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

const chill = {
    title: 'Perpetuity by Lily Clay',
    imgPath: 'perpetuity.png',
    description: 'Lily add some stuff here',
    tags: ['animation'],
    url: '/perpetuity'
}

const untitled = {
    title: '4 untitled works by Mia Dove',
    imgPath: 'untitled2.jpg',
    description: 'Someone add something here',
    tags: ['print collage'],
    url: '/untitled'
}


// switch statement here


const Contributions = () => {
    const classes = contributionsStyles();
    let { path, url } = useRouteMatch();

    return (
        <div>
        <h1 className={`${classes.contributionsStyle} font-effect-3d`}>Contributions</h1>
        <ProjectEntry {...chill}/>
        <ProjectEntry {...untitled}/>
        </div>
    )
}

export default Contributions
