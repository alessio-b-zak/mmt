import React from 'react'
import {createUseStyles} from 'react-jss'
import download from "../assets/download.jpeg"

const projectEntryStyles = createUseStyles({
    projectEntry : {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid black 1px',
        padding: '10px',
        backgroundColor: 'lightgray',
        marginTop: '2%'
    },
    projectContainer : {
        display: 'flex',
        flexDirection: 'row',
        height: '100px',
        marginTop: '2%'
    },
    pictureContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: 'solid black 1px',
        height: '80px',
        order: '1',
        left: '10px',
        right: '10px',
        width: '20%'

    },
    textContainer :{
        border: 'solid black 1px',
        padding: '10px',
        height: '80px',
        order: '2',
        width: '60%',
        margin :{
        left: '10px',
        right: '10px',
        }
    },
    tagContainer : {
        border: 'solid black 1px',
        padding: '10px',
        height: '80px',
        order: '2',
        margin :{
        right: '10px'
        },
        width: '20%'
    },
    teaserImage : {
       maxWidth: '100%',
       maxHeight: '100%',
    }
})

const ProjectEntry = () => {
    const classes = projectEntryStyles()
    return (
        <div className={classes.projectEntry}>
            <div>The chillout zone</div>
            <div className={classes.projectContainer}>
            <div className={classes.pictureContainer}>
                <img className={classes.teaserImage} src={download}/>
            </div>
            <div className={classes.textContainer}>
                A theatre play about chilling the fuck out,
                nice
            </div>
            <div className={classes.tagContainer}>
                chilling
            </div>
            </div>
        </div>
    )
}

export default ProjectEntry
