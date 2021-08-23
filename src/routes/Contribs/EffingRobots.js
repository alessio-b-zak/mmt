import React from 'react'
import Youtube from 'react-youtube'

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

// title size

const EffingRobots = () => {

    return (
        <div>
            <h1>Effing Robots</h1>
            <h1>How I Taught the A.I. to Stop Worrying and Love Humans</h1>
            <h2>L. Nicol Cabe</h2>
            <Test youtubeId="Y8YoerD0TwU"/>
            <br></br>
            Artificial Intelligence is on the way, and it will be powerful.
            What happens to us when it arrives? How will it perceive
            humanity? Can it learn … to love? After getting hit on by a
            chatbot, one horny science fiction nerd is on a quest to make it
            with a new AI overlord. 
            <br/> <br/>
            I'm getting a masters from the University
            of Glasgow, focusing on new media theatre. I work in two mediums:
            science fiction / speculative storytelling, and theatre
            production. I write and perform speculative fiction story-telling
            shows, direct new plays, and help playwrights develop their
            workI'm getting a masters from the University of Glasgow,
            focusing on new media theatre. Find me on twitter 
            <a href="https://twitter.com/nicolthegreat?lang=en"> @nicolthegreat</a>
        </div>
    )

}

export default EffingRobots;
