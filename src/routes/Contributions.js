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
    url: 'contributions/perpetuity'
}


// switch statement here


const Contributions = () => {
    const classes = contributionsStyles();
    return (
        <div>
        <Route exact path="/contributions">
            <h1 className={`${classes.contributionsStyle} font-effect-3d`}>Contributions</h1>
            <ProjectEntry {...chill}/>
        </Route>
        <Route path="/contributions/perpetuity">
            <LilyAnimation/>
        </Route>
        </div>
    )
}

export default Contributions
