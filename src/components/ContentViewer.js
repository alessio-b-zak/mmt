import {createUseStyles} from 'react-jss';

const contentViewerStyles = createUseStyles({
    contentViewer: {
        minHeight: '90vh',
        position: 'relative',
        width: "70%",
        minWidth: '430px',
        margin : {
            top: '5vh',
            left: '0.5vh',
            bottom: '5vh',
            right: '10px',
        },
        padding : {
            left: '7%',
            right: '7%',
            top: '3%',
            bottom: '3%',
        },
        background: 'rgb(243, 245, 252)',
        textAlign: 'left',
        borderRadius: '3px',
    },
  '@media only screen and (max-width: 600px)' :{
    contentViewer :{
        minWidth: '0px',
        width: '96%',
        margin :{
            left: '2%',
            right: '2%',
            top: '0px',
            bottom: '0px'
        }
    }
  }
})



const ContentViewer = props => {
    const classes = contentViewerStyles();
    return(
        <div className={classes.contentViewer}>
            {props.children}
        </div>
    )
}

export default ContentViewer;