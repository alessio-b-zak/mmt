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

const LilyAnimation = () => {

    return (
        <div>
            <h1>Perpetuity</h1>
            <h2>Lily Clay</h2>
            <Test youtubeID="RL1XSn4vlGc" />
            <br></br>
            Find me on social media here . and here .
        </div>
    )

}

export default LilyAnimation
