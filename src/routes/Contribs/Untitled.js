import React from 'react'
import { createUseStyles } from 'react-jss'
import pic1 from '../../assets/untitled1.jpeg'
import pic2 from '../../assets/untitled2.jpg'
import pic3 from '../../assets/untitled3.jpg'
import pic4 from '../../assets/untitled4.jpg'


const untitledStyles = createUseStyles({
    picStyle :{
        maxWidth: '100%',
    }
})

const Untitled = () => {
    const classes = untitledStyles();
    return (
        <div>
        <h1>4 untitled works</h1>
        <h2>Mia Dove</h2>
         I am a London based artist, who enjoys experimenting with
         printmaking and collage, sometimes combining the two. Within my
         practise I explore female and personal narratives and identities.
         
         You can follow my work through my Instagram account where I document
         my ideas and processes: <a href={`https://www.instagram.com/mialucydove/`}> @mialucydove</a>
         <br/>
         <br/>
         <br/>
         <img className={classes.picStyle} src={pic4}/>
         <img className={classes.picStyle} src={pic1}/>
         <img className={classes.picStyle} src={pic2}/>
         <img className={classes.picStyle} src={pic3}/>
        </div>
    )
}

export default Untitled
