import {createUseStyles} from 'react-jss';

const contentViewerStyles = createUseStyles({
    contentViewer: {
        minHeight: '90vh',
        position: 'relative',
        width: "70%",
        minWidth: '900px',
        flexBasis: '75%',
        flexSrink: '1',
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
  '@media only screen and (max-width: 1230px)' :{
      contentViewer :{
          minWidth: '500px',
          width: '97%',
          marginRight: '10px'
      }
  },
  '@media only screen and (max-width: 600px)' :{
    contentViewer :{
        minWidth: '0px',
        minHeight: '70vh',
        width: '96%',
        margin :{
            left: '2%',
            right: '2%',
            top: '1%',
            bottom: '4%'
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