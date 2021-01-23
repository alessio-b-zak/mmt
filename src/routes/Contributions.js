import React from 'react'
import ProjectEntry from '../components/ProjectEntry'
import {createUseStyles} from 'react-jss';
import Chillout from './Contribs/Chillout'
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
    title: 'The Chillout Zone',
    imgPath: 'download.jpeg',
    description: 'A theatre play about chilling the fuck out',
    tags: ['chilling', 'billing'],
    url: 'contributions/chill'
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
        <Route path="/contributions/chill">
            <Chillout/>
        </Route>
        </div>
    )
}

export default Contributions
