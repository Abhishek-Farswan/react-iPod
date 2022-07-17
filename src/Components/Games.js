import React from "react";
import '../CSS/App.css';
import '../CSS/screen.css';

const Games = (props) => {
  return (
    <div className="screen">
      <div className="screen-structure">
        <div className="screen-main-menu">
          <div className="main-menu">
            <div style={styling.imageCont}>
              <img src="assets/menu-images/mario.png" alt="Cover1" style={styling.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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

export default Games;
