import React from 'react'
import { createUseStyles } from 'react-jss'
import tom from '../../assets/tom.jpg'
import tominfo from '../../assets/tom_info.jpg'
import stephen from '../../assets/stephen.jpg'
import stepheninfo from '../../assets/stephen_info.jpg'
import claudia from '../../assets/claudia.jpg'
import claudiainfo from '../../assets/claudia_info.jpg'
import victoria from '../../assets/victoria.jpg'
import victoriainfo from '../../assets/victoria_info.jpg'
import will from '../../assets/will_qanon.jpg'
import willinfo from '../../assets/will_qanon_info.jpg'
import amber from '../../assets/amber.jpg'
import amberinfo from '../../assets/amber_info.jpg'
import natty from '../../assets/natty.jpg'
import nattyinfo from '../../assets/natty_info.jpg'



const aboutStyles = createUseStyles({
    peopleGrid : {
        marginTop: '2%',
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
  picStyle : {
        maxWidth: '50%',
  },
  '@media only screen and (max-width: 600px)' :{
    peopleGrid : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    picStyle : {
        maxWidth : '100%'
    }
  }
})


const QanonInfo = () => {
    const classes = aboutStyles();
    return(
    <div>
        <h1>Those People: A Play About Qanon - Info</h1>
        <h2>Content Warning</h2>
        This show contains strong language, discussions of mental health and graphic
        descriptions of violence, including sexual violence, against children. Viewer
        discretion is advised.
        <h2>Cast</h2>
        <div>
            <h3>Tom</h3>
            <br/>
            <img className={classes.picStyle} src={tom}/>
            <img className={classes.picStyle} src={tominfo}/>
            <br/>
            <br/>
            <h3>Stephen</h3>
            <br/>
            <img className={classes.picStyle} src={stephen}/>
            <img className={classes.picStyle} src={stepheninfo}/>
            <br/>
            <br/>
            <h3>Claudia</h3>
            <br/>
            <img className={classes.picStyle} src={claudia}/>
            <img className={classes.picStyle} src={claudiainfo}/>
            <h3>Victoria</h3>
            <br/>
            <img className={classes.picStyle} src={victoria}/>
            <img className={classes.picStyle} src={victoriainfo}/>
            <h3>Will</h3>
            <br/>
            <img className={classes.picStyle} src={will}/>
            <img className={classes.picStyle} src={willinfo}/>
            <h3>Amber</h3>
            <br/>
            <img className={classes.picStyle} src={amber}/>
            <img className={classes.picStyle} src={amberinfo}/>
            <h3>Natty</h3>
            <br/>
            <img className={classes.picStyle} src={natty}/>
            <img className={classes.picStyle} src={nattyinfo}/>
        </div>
    </div>    
 )
}

export default QanonInfo
