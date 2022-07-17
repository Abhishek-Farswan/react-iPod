import React from "react";
import '../CSS/screen.css';
import LockScreen from "./LockScreen";
import '../CSS/screen.css';
import MenuItem from "./MenuItem";
import SignIn from "./SignIn";
import Coverflow from "./Coverflow";
import Cover from "./Cover";
import Games from "./Games";
import Music from "./Music";
import MusicPlayer from "./MusicPlayer";
import Settings from "./Settings";

// screen types
// Screen 0 = Lock Screen
// Screen 1 = Main Menu
// Screen 2 = Sub Menus of menu
// Screen 3 = Dedicated screen for categories

const Screen = (props) => {
  let screen = props.screenLock;
  let displayMenu = props.menuScreen;
  let displayScreen = props.displayScreen;
  // main menu screen
  if (screen <= 1) {
    if (screen === 1) {
      displayScreen = (<MenuItem
        pickMenu={props.pickMenu}
        changeMenu_State={props.changeMenu_State}
        screen={props.screenLock}
        lock={props.lock}
        menuItem={props.menuItem}
      />);
    } else {
      displayScreen = (<LockScreen />);
    }
  } //  sub menu screen
  else if (screen === 2) {
    // In coverflow menu
    if (displayMenu === 0) {
      displayScreen = <Coverflow menuItem={props.menuItem}
        pickMenu={props.pickMenu}
        changeMenu_State={props.changeMenu_State}
        screen={props.screenLock}
        lock={props.lock}
      />;
    }
    // In Music menu
    else if (displayMenu === 1) {
      displayScreen = <Music menuItem={props.menuItem} />;
    }
    // In Games menu
    else if (displayMenu === 2) {
      displayScreen = <Games menuItem={props.menuItem} />;
    }
    // In Settings
    else if (displayMenu === 3) {
      displayScreen = <Settings menuItem={props.menuItem} />;
    }
    // In Sign In
    else if (displayMenu === 4) {
      displayScreen = <SignIn menuItem={props.menuItem} />;
    }
  } else if (screen === 3) {
    // Selected cover
    if (displayMenu === 0) {
      displayScreen = <Cover menuItem={props.menuItem} />;
    }
    else if (displayMenu === 1) {
      displayScreen = <MusicPlayer menuItem={props.menuItem} />;
    }
  }
  // locked screen
  return (
    displayScreen
  );
}


export default Screen;