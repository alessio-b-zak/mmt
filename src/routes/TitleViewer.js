import React from 'react'
import {createUseStyles} from 'react-jss';
import Textbox from "../components/Textbox"

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
      }
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
                and performance space. The work we produce is inspired by our
                complex and ever-changing relationship to the Internet and
                technology, and how we integrate both into our everyday
                lives.                 

                We are a  loose collective and we collaborate with
                artists, poets, videographers and actors, all virtually. We
                grew up on the Internet and it has shaped who we are.
                
                We are currently working to digitally stage a performance of
                our brand-new verbatim project ‘a play about QAnon’ and have
                opened up a digital platform to young creatives to display
                their work.
            </Textbox>
        </div>
    )
}

export default TitleViewer
