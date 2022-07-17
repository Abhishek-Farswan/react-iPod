import React from "react";
import '../CSS/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faBatteryThreeQuarters, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import '../CSS/screen.css';

const Music = (props) => {

  // the sliding/rotating gesture to go through the options will be triggered dynamically

  let menuList = ["Playlists", "Artists", "Albums", "Favorites"];
  let picItem = "assets/menu-images/logo1.png";
  let menuItem = props.menuItem;
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
        <img src={picItem}></img>
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
              {menuItem >= 0 && menuItem <= 3 && picElement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
