import {createUseStyles} from 'react-jss';
import ContentViewer from './ContentViewer';



const mainViewportStyles = createUseStyles({
  mainViewport: {
    order: '2',
    flexShrink: '1',
    flexBasis: '75%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  '@media only screen and (max-width: 600px)' :{
    mainViewport :{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    }
  }
})

const MainViewport = props => {
    const classes = mainViewportStyles();
    return(
        <div className={classes.mainViewport}>
          <ContentViewer>
            {props.children}
          </ContentViewer>
        </div>
    )
}

export default MainViewport;