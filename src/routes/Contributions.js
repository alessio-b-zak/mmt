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
    description: 'A film about technology, nature, and time',
    tags: ['animation'],
    url: '/perpetuity'
}

const untitled = {
    title: '4 untitled works by Mia Dove',
    imgPath: 'untitled2.jpg',
    description: '',
    tags: ['print collage'],
    url: '/untitled'
}

const esthPoems = {
    title: '3 poems by Esther Lowlands',
    imgPath: 'brige.jpg',
    description: '',
    tags: ['poetry'],
    url: '/untitledpoems'
}

const effingRobots = {
    title: 'Effing Robots by L. Nicol Cabe',
    imgPath: 'effing.png',
    description: 'A play about artificial intelligence and love',
    tags: ['theatre'],
    url: '/effingrobots'
}

// switch statement here


const Contributions = () => {
    const classes = contributionsStyles();
    let { path, url } = useRouteMatch();

    return (
        <div>
        <h1 className={`${classes.contributionsStyle} font-effect-3d`}>Contributions</h1>
        <ProjectEntry {...effingRobots}/>
        <ProjectEntry {...esthPoems}/>
        <ProjectEntry {...untitled}/>
        <ProjectEntry {...chill}/>
        </div>
    )
}

export default Contributions
