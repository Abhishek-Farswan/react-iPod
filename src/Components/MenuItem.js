import React from "react";
import '../CSS/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import '../CSS/screen.css';

class MenuItem extends React.Component {

  // the sliding/rotating gesture to go through the options will be triggered dynamically

  componentDidMount() {
    this.props.pickMenu(this.props.changeMenu_State);
  }
  render() {
    let menuList = ["Cover Flow", "Music", "Games", "Settings", "Sign in"];
    let picList = ["assets/menu-images/logo1.png",
      "assets/menu-images/music_logo.png",
      "assets/menu-images/games_logo.png",
      "assets/menu-images/settings-logo-3.png",
      "assets/menu-images/signin_logo.jpg",];
    let menuItem = this.props.menuItem;
    let menuElement = [];
    let picElement;

    for (let m = 0; m < menuList.length; m++) {
      menuElement.push(
        m === menuItem ? (
          <li className="list-items active" key={"menu" + menuList[m]}>
            <span className="item item-active">{menuList[m]}</span>{" "}
            <span>
              <FontAwesomeIcon className='select-indicator' icon={faGreaterThan} />
            </span>
          </li>
        ) : (
          <li className="list-items" key={"menu" + menuList[m]}>
            <span className="item">{menuList[m]}</span>{" "}
            <span>
              <FontAwesomeIcon className='select-indicator' icon={faGreaterThan} />
            </span>
          </li>
        )
      );


      picElement =
        <div className="menu-item-pic">
          <img src={picList[menuItem]}></img>
        </div>
    }

    return (
      <div className="screen">
        <div className="screen-structure">
          <div className="screen-main-menu">
            <Header />
            <div className="main-menu">
              <div className="main-menu-left">
                <ul >
                  {menuElement}
                </ul>
              </div>
              <div className="main-menu-right">
                {menuItem >= 0 && menuItem <= 4 && picElement}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
