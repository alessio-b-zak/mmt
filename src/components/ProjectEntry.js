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

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}



const ProjectEntryBig = () => {
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


const projectEntrySmallStyles = createUseStyles({
    projectSmallContainer : {
        display: 'flex',
        border: 'solid black 1px',
        padding: '10px',
        flexDirection: 'column',
        marginBottom: '4%'
    },
    boxContainer : {
         display: 'flex',
        border: 'solid black 1px',
        padding: '10px',
        flexDirection: 'column'
    }
})

const ProjectEntrySmall = () => {
    const classes = projectEntrySmallStyles()
    return(
        <div className={classes.projectSmallContainer}>
            <div className={classes.boxContainer}>
                <img src={download}/>
            </div>
            <div>
                The chillout zone
            </div>
            <div className={classes.boxContainer}>
                A theatre play about chilling the fuck out,
                nice
            </div>
            <div>
                chillout
            </div>
        </div>
    )
}

const ProjectEntry = props => {
  const { width } = useViewport();
  const breakpoint = 600;
  return width < breakpoint ? <ProjectEntrySmall/>  : <ProjectEntryBig/> ;

}


export default ProjectEntry
