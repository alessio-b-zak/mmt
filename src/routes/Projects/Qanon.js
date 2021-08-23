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
            In this work we have adapted verbatim material from interviews
            and online content relating to Qanon compiled before the 2020 election.
            <br></br>
            <br></br>
            <h2>In-Person Production</h2>
            The second of the two productions was an in-person play which was filmed.
            It featured a reduced cast and is currently featuring in the Fringe online and can be found
            Check the info page <Link to="/qanoninfo">here</Link> for more
            information about the cast and trigger warnings.
            <a href="https://tickets.edfringe.com/whats-on/those-people-a-play-about-qanon">here</a>
            <br></br>
            <br></br>
            <h2>Online Production</h2>
            Below is the first production which was done with the full cast
            filmed during lockdown.
            <br></br>
            <br></br>
            <br></br>
            <Test youtubeId="12jCL71qeiU"/>
            <br></br>
            <br></br> 
            We produced a
            podcast on our experience of making the project which you can
            listen to on <a
            href="https://soundcloud.com/user-639811671/what-we-learned-writing-a-play-about-qanon?ref=clipboard&p=i&c=1">
            soundcloud</a>.
        </div>
    )

}

export default Qanon;
