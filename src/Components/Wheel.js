import React from 'react';
import '../CSS/wheel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faForwardFast, faBackwardFast, faPause, faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import ZingTouch from "zingtouch";

class Wheel extends React.Component {

  constructor() {
    super();

    this.state = {
      musicPlay: 0
    };
  }

  componentDidMount() {
    const exitMenu = this.props.exitMenu;

    // getting buttons element by id
    const backButton = document.getElementById("main-menu-button");

    // defining active region for buttons
    const activeMenuButton = ZingTouch.Region(backButton);

    // exit menu or lock device whenever Menu button is pressed
    activeMenuButton.bind(backButton, "tap", function (event) {
      return exitMenu();
    });
  }

  render() {
    const screen = this.props.screenLock;
    return (
      <div id='wheel'>
        <div className='wheel-structure'>
          <div className='wheel-button-holder' id='wheel-button-holder'>
            <button className='wheel-button-holder-main'
              onClick={() => {
                if (this.props.lock === true) return this.props.onUnlock();
                else if (screen >= 1) return this.props.enterMenu();
              }}
            > <FontAwesomeIcon className='wheel-holder-icons apple-icon  main-button-logo' icon={faAppleAlt} /></button>
            <button id='main-menu-button' className='wheel-button-holder-menu wheel-buttons'>Menu</button>
            <button className='wheel-button-holder-play-pause wheel-buttons'
              onClick={() => {
                if (screen === 3 && this.props.menuScreen === 1) {
                  if (this.state.musicPlay === 0) {
                    this.state.musicPlay++;
                    this.props.playPauseAudio(this.state.musicPlay);
                  }
                  else {
                    this.state.musicPlay--;
                    this.props.playPauseAudio(this.state.musicPlay);
                  }
                }
              }}
            >
              <FontAwesomeIcon className='wheel-holder-icons ' icon={faPlay} />&nbsp;<FontAwesomeIcon className='wheel-holder-icons wheel-buttons' icon={faPause} /></button>
            <button className='wheel-button-holder-forward-fast wheel-buttons'><FontAwesomeIcon className='wheel-holder-icons' icon={faForwardFast} /></button>
            <button className='wheel-button-holder-backward-fast wheel-buttons'><FontAwesomeIcon className='wheel-holder-icons' icon={faBackwardFast} /></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Wheel;