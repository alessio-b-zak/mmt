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
                Harry write something here thanks. 
                this is words that i wrote thanks 
            </Textbox>
        </div>
    )
}

export default TitleViewer
