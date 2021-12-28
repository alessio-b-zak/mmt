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
            Those People: A Play About QAnon is based on interviews with young people from
            the UK, conducted online and from accounts written on the subreddit:
            r/QAnoncasualties. This performance addresses online extremism and explores why
            there is such mistrust, from young people especially, in our institutions and
            what we can do to better counteract misinformation. This piece was written
            shortly after former President Trump’s defeat to President Biden in the November
            2020 election. Since then, the QAnon conspiracy has continued to spread and gain
            traction in the US and across the world. 
            <br></br>
            <br></br>
            Below are two versions of the show available for streaming. One is
            an online version produced remotely in Lockdown and released in
            April 2021. The other is an in-person performance held during July
            2021 for the Edinburgh Fringe Festival.
            <br></br>
            <h2>In-Person Production</h2>
            This is a recording of a performance at the Wickham Theatre in Bristol streamed online
            as part of the Edinburgh Fringe Festival 2021. The performers are: Victoria Finch, 
            Claudia Marks, Stephen Murphy, and Natty Wilson.
            <br></br>
            <br></br>
            <br></br>
            <Test youtubeId="kuINrBxt3qs"/>
            <br></br>
            <br></br>
            <h2>Online Production</h2>

            Below is the first production which filmed remotely during Lockdown.            Check the info page <Link to="/qanoninfo">here</Link> for more
            information about the cast and trigger warnings.

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
