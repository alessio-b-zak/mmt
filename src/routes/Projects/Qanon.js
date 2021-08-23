import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import pic from '../../assets/intro_qanon.jpg'

const untitledStyles = createUseStyles({
    picStyle :{
        maxWidth: '100%',
    }
})

const Test =  ({ youtubeId }) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  );
};
const Qanon = () => {
    const classes = untitledStyles();
    return (
        <div>
            <h1>"Those People": A play about Qanon</h1>
            <br></br>
            Watch our new show about the Qanon movement and young people in the UK below!
            <br></br>
            <br></br>
            <Test youtubeId="12jCL71qeiU"/>
            <br></br>
            Check the info page <Link to="/qanoninfo">here</Link> for more
            information about the cast and trigger warnings.
            <br></br> 
            <br></br> 
            We have produced a
            podcast on our experience of making the project which you can
            listen to on <a
            href="https://soundcloud.com/user-639811671/what-we-learned-writing-a-play-about-qanon?ref=clipboard&p=i&c=1">
            soundcloud</a>.
        </div>
    )

}

export default Qanon;
