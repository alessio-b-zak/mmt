import React from 'react'
import {createUseStyles} from 'react-jss';
import Textbox from "../components/Textbox"
import titlepic from '../assets/title_page.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams 
} from "react-router-dom";


const titleViewerStyles = createUseStyles({
    test: {
        color: 'black',
        marginTop: '8%',
        fontSize: '6vw',
        marginBottom: '10%',
    },

  '@media only screen and (max-width: 1730px)' :{
      test :{
        fontSize: '110px'
      }
  },

  '@media only screen and (max-width: 1230px)' :{
      test : {
        fontSize: '9vw',
      }
  },
  '@media only screen and (max-width: 600px)' :{
      test : {
          fontSize: '12vw'
      },
    picStyle :{
        maxWidth: '100%',
    },

  }
})

const TitleViewer = () => {
    const classes = titleViewerStyles();
    return (
        <div>
            <h1 className={`${classes.test} font-effect-3d`}>
                multi.
                <br/>
                modal.
                <br/>
                theatre
            </h1> 
            <Textbox>
                Welcome to multi.modal.theatre a new online theatre company
                and digital performance space. The work we produce is inspired by our
                complex and ever-changing relationship to the Internet and
                technology, and how we integrate both into our everyday
                lives.                 

                We are a  loose collective and we collaborate with
                artists, poets, videographers and actors, all virtually. We
                grew up on the Internet and it has shaped who we are.
                
                Check out our new play,   
                <Link to="/qanon">"Those People": A Play About Qanon</Link>, which was recently featured as part of the Edinburgh Fringe and other contributions <Link
                to="/contributions">here</Link>. Follow us on Twitter at <Link to="https://twitter.com/modaltheatre?lang=en-gb">@ModalTheatre</Link>! 
            </Textbox>
         {/* <img className={classes.picStyle} src={titlepic}/> */}
        </div>
    )
}

export default TitleViewer
