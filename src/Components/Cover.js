import React from "react";
import "../CSS/App.css";
import '../CSS/screen.css';

class Cover extends React.Component {
  render() {

    let menuList = ["assets/menu-images/slider1.jpg",
      "assets/menu-images/coverflow2.png",
      "assets/menu-images/coverflow3.jpg",
      "assets/menu-images/coverflow4.png"
    ];
    const coverId = this.props.menuItem;

    return (
      <div className="screen">
        <div className="screen-structure">
          <div className="screen-main-menu">
            <div className="main-menu">
              <div style={styling.imageCont}>
                {coverId >= 0 && coverId <= 4 && <img src={menuList[coverId]} alt="Cover1" style={styling.image} />}
                {coverId < 0 && coverId > 4 && <img src={menuList[0]} alt="Cover1" style={styling.image} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ***************style************************

const styling = {
  imageCont: {
    width: 360,
    maxHeight: 275
  },
  image: {
    width: 360,
    borderRadius: 15,
    height: 275
  }
};

export default Cover;
