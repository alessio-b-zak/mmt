import React from 'react'
import {createUseStyles} from 'react-jss'
import { Link } from 'react-router-dom';


const images = require.context('../assets', true);


const projectEntryStyles = createUseStyles({
    projectEntry : {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid black 1px',
        padding: '5px',
        boxShadow: '-5px 5px',
        marginTop: '1%'
    },
    projectContainer : {
        display: 'flex',
        flexDirection: 'row',
        height: '90px',
        marginTop: '2%'
    },
    pictureContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        },
    },
    forceNoStyle : {
        textDecoration: 'none', 
        color: 'black',
        marginTop: '1px',
        marginBottom: '1px',
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
    },
    linksStyles : {
        '& a' : {
        textDecoration: 'none'
        },
        '&:hover':{
        backgroundColor: 'lightyellow'
        }
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


const chill = {
    title: 'initialThe Chillout Zone',
    imgPath: 'assets/imgPath',
    description: 'A theatre play about chilling the fuck out',
    tags: ['chilling']
}


const ProjectEntryBig = props => {
    const classes = projectEntryStyles()
    const tI = require('../assets/download.jpeg');
    return (
        <div className={classes.linksStyles}>
        <Link  to={props.url}>
        <div className={classes.projectEntry}>
            <p className={classes.forceNoStyle}>
                {props.title}
            </p>
            <div className={classes.projectContainer}>
            <div className={classes.pictureContainer}>
                <img className={classes.teaserImage} src={require('../assets/' + props.imgPath).default}/>
            </div>
            <div className={classes.textContainer}>
                <p className={classes.forceNoStyle}>{props.description}</p>
            </div>
            <div className={classes.tagContainer}>
                <p className={classes.forceNoStyle}>
                    {props.tags}
                </p>
            </div>
            </div>
        </div>
        </Link>
        </div>
    )
}


const projectEntrySmallStyles = createUseStyles({
    projectSmallContainer : {
        display: 'flex',
        border: 'solid black 1px',
        padding: '10px',
        flexDirection: 'column',
        marginBottom: '4%',
        backgroundColor: 'lightyellow',
        boxShadow: '-5px 5px',
    },
    boxContainer : {
        display: 'flex',
        border: 'solid black 1px',
        padding: '10px',
        flexDirection: 'column',
        marginTop: '5px',
        textDecoration: 'none', 
        color: 'black',

    },
    picContainer: {
        display: 'flex',
        padding: '10px',
        flexDirection: 'column'
    },
    linksStyles : {
        '& a' : {
        textDecoration: 'none'
        },
        '&:hover':{
        backgroundColor: 'lightyellow'
        }
    },
    forceNoStyle : {
        textDecoration: 'none', 
        color: 'black',
    },
})

const ProjectEntrySmall = props => {
    const classes = projectEntrySmallStyles()
    return(
        <div className={classes.linksStyles}>
        <Link  to={props.url}>
        <div className={classes.projectSmallContainer}>
            <div className={classes.picContainer}>
                <img className={classes.teaserImage} src={require('../assets/' + props.imgPath).default}/>
            </div>
            <div className={classes.forceNoStyle}>
                {props.title}
            </div>
            <div className={classes.boxContainer}>
                {props.description}
                <br/>
                <br/>
                {props.tags}
            </div>
        </div>
        </Link>
        </div>
    )
}

const ProjectEntry = props => {
  const { width } = useViewport();
  const breakpoint = 600;
  return width < breakpoint ? <ProjectEntrySmall {...props} />  : <ProjectEntryBig {...props}/> ;

}


export default ProjectEntry
