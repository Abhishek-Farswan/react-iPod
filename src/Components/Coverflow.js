import React from "react";
import '../CSS/App.css';
import Header from './Header';
import '../CSS/screen.css';

const Coverflow = (props) => {


  let menuList = ["assets/menu-images/slider1.jpg",
    "assets/menu-images/coverflow2.png",
    "assets/menu-images/coverflow3.jpg",
    "assets/menu-images/coverflow4.png"
  ];
  let menuItem = props.menuItem;
  let menuElement = [];

  for (let m = 0; m < menuList.length; m++) {
    menuElement.push(
      m === menuItem ? (
        <li
          className="covers list-items active"
          style={styling.cover}
          key={"cover" + menuList[m]}
        >
          <img src={menuList[m]} alt="cover1" style={styling.image} />
        </li>
      ) : (
        <li
          className="covers list-items"
          style={styling.cover}
          key={"cover" + menuList[m]}
        >
          <img src={menuList[m]} alt="cover2" style={styling.image} />
        </li>
      )
    );
  }

  return (

    <div className="screen">
      <div className="screen-structure">
        <div className="screen-main-menu">
          <Header />
          <div className="main-menu">
            <ul id="coverflow-container" style={styling.container} className="list">
              {menuElement}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ***************style************************

const styling = {
  container: {
    display: "flex",
    width: 360,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cover: {
    height: 110,
    width: 170,
  },
  image: {
    height: "inherit",
    width: "inherit",
    borderRadius: 10
  }
};


export default Coverflow;
