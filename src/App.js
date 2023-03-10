import logo from "./logo.svg";
import "./App.scss";
import { Player } from "video-react";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Members from "./pages/Members";
import Header from "./components/Header";
import { MouseParallax } from "react-just-parallax";
import { JolPlayer } from "jol-player";

function EndContent() {
  return (
    <div className="end-content">
      <h1>Overworld</h1>
      <img className="logo" src="asset/logo.png" />
      <img src="asset/OVWR_MaleCharacter-2.png" />
    </div>
  );
}
function App() {
  React.useEffect(() => {
    var promise = document.querySelector("video").play();

    if (promise !== undefined) {
      promise
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
    }
  });
  const handleClickPlay = () => {};
  return (
    <div className="App">
      <Header />
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="video">
                  <JolPlayer
                    option={{
                      mode: "heightFix",
                      autoPlay: true,
                      setEndPlayContent: <EndContent />,
                      videoSrc: "asset/video.mp4",
                      language: "en",
                      isProgressFloat: false,
                      isShowPauseButton: false,
                      isToast: false,
                      isShowSet: false,
                      isShowScreenshot: false,
                      isShowPicture: false,
                      isShowWebFullScreen: false,
                    }}
                  />
                </div>
              </div>
              <div className="section">
                <img src="asset/img4.jpeg" />
                <img src="asset/img5.jpeg" />
              </div>
              <div className="section">
                <Members />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
