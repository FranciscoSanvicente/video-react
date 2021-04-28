import React, { Fragment } from "react";
import ReactPlayer from "react-player/vimeo";
import "./App.css";
const App = () => {
  return (
    <Fragment>
      <div className="player-wrapper">
        <ReactPlayer
          url="https://vimeo.com/304202073"
          className="react-player"
          playing="true"
          width="90%"
          height="60%"
          controls="true"
          light="true"
          volume="true"
          pip="true"
          stopOnUnmount="true"
          onReady="false"
          onStart
          onClickPreview
          onEnablePIP
          style={{
            backgroundImage:
              'url("https://comunitics.com/wp-content/uploads/2020/12/Copia-de-Sin-titulo.png")',
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          fullscreen="true"
          allowfullscreen="true"
        />
      </div>
    </Fragment>
  );
};

export default App;
