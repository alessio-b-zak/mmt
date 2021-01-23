import React from 'react'
import ProjectEntry from '../components/ProjectEntry'
import {createUseStyles} from 'react-jss';


const contributionsStyles = createUseStyles({
    contributionsStyle : {
        fontSize: '3.6vh'
    }
})

//  make the title smaller you fucking moron



const Contributions = () => {
    const classes = contributionsStyles();
    return (
        <div>
            <h1 className={`${classes.contributionsStyle} font-effect-3d`}>Contributions</h1>
            <ProjectEntry/>
            <ProjectEntry/>
            <ProjectEntry/>
            <ProjectEntry/>
            <ProjectEntry/>
        </div>
    )
}

export default Contributions
