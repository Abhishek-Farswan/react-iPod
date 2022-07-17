import './CSS/App.css';
import Wheel from './Components/Wheel';
import Screen from './Components/Screen';
import ZingTouch from "zingtouch";
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      locked: true,
      screen: 0,
      menu: 0,
      menuItem: 0,
      options: 0,
      musicPlay: 0
    };

    this.changeMenu = this.changeMenu.bind(this);
    this.angle = 0;
  }

  //function for unlocking the ipod if select-btn is pressed on lock screen
  unlocking = () => {
    if (this.state.locked === true) {
      this.setState({
        locked: false,
        screen: this.state.screen + 1
      });
    }
  };

  // change menu item list
  // the function will be called from child components
  changeMenu = (item) => {
    this.setState({
      menuItem: item
    });
    if ( this.state.screen < 3 || (this.state.screen === 3 && this.state.menu === 3)) {
      this.setState({
        menuItem: item
      });
    }
  };

  // function to go into sub-menus
  inMenu = () => {
    if (this.state.screen < 3) {
      this.setState({
        screen: this.state.screen + 1
      });
    }
    if (this.state.screen === 1) {
      this.setState({
        menu: this.state.menuItem,
        menuItem: 0
      });
    }
    if (this.state.screen === 2 && this.state.menu === 3) {
      this.setState({
        options: this.state.menuItem
      });
    }

    if (this.state.screen === 2 && this.state.menu === 2) {
      this.setState({
        screen: this.state.screen,
        menu: this.state.menu
      });
    }

    if (this.state.screen === 2 && this.state.menu === 3) {
      this.setState({
        screen: this.state.screen,
        menu: this.state.menu
      });
    }

    if (this.state.screen === 2 && this.state.menu === 4) {
      this.setState({
        screen: this.state.screen,
        menu: this.state.menu
      });
    }
  };

  // function to come back from sub-menus
  backMenu = () => {
    // for locking screen
    if (this.state.locked === false && this.state.screen === 1) {
      this.setState({
        locked: true,
        screen: this.state.screen - 1
      });
    }
    // for exiting current menu
    if (this.state.screen > 0) {
      this.setState({
        screen: this.state.screen - 1,
        menuItem: 0
      });
    }
    if (this.state.screen > 0 && this.state.screen <= 1) {
      this.setState({
        menu: 0
      });
    }
  };

  //function to move over the menu items by Rotation gesture
  move = (changeMenu_State) => {
    const containerElement = document.getElementById("wheel");
    const activeRegion = ZingTouch.Region(containerElement);
    const childElement = document.getElementById("wheel");
    let list_item = document.getElementsByClassName("list-items");
    const len = list_item.length;
    let i = 0;
    let j = len;

    activeRegion.bind(childElement, "rotate", function (event) {
      //Perform Operations
      if (event.detail.distanceFromOrigin === 0) {
        this.angle = event.detail.angle;
      }
      // rotation function for clockwise direction
      if (Math.abs(this.angle - event.detail.angle) > 10) {
        this.angle = Math.abs(event.detail.angle);
        if (event.detail.distanceFromLast === 0) {
          return;
        } else if (event.detail.distanceFromLast > 0) {
          if (i >= list_item.length) {
            i = 0;
            changeMenu_State(i);
          }
          changeMenu_State(i);
          i++;
        } else if (event.detail.distanceFromLast < 0) {
          // rotation function for anti - clockwise direction
          if (j < 0) {
            changeMenu_State(j);
            j = len;
          }
          else {
            changeMenu_State(j);
            j--;
          }
        }
      }
    });
  };

  // function for play/pausing the audio with play/pause button on controls
  playPauseAudio = (musicPlay) => {
    const playBtn = document.getElementById("play-btn");
    let song = document.getElementById("player");
    if (musicPlay === 1) {
      song.play();
    } else {
      song.pause();
    }
  };


  render() {
    return (

      <div className="App">
        <Screen
          lock={this.state.locked}
          screenLock={this.state.screen}
          menuScreen={this.state.menu}
          pickMenu={this.move}
          menuItem={this.state.menuItem}
          changeMenu_State={this.changeMenu}
          option={this.state.options}
          playPauseAudio={this.playPauseAudio}
        />

        <Wheel
          lock={this.state.locked}
          screenLock={this.state.screen}
          onUnlock={this.unlocking}
          enterMenu={this.inMenu}
          exitMenu={this.backMenu}
          playPauseAudio={this.playPauseAudio}
          musicPlay={this.state.musicPlay}
          menuScreen={this.state.menu}
        />
      </div>
    );
  }
}

export default App;
