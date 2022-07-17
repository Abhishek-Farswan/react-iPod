import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';

function LockScreen() {
  let currentDate = new Date();
  let d = currentDate.toDateString();

  return (

    <div className="screen">
      <div className="screen-structure">
        <div className="screen-main-menu">
          <Header />
          <div className="lockscreen-main">
            <div className="lockscreen-date">{d}</div>
            <div id="lock-container">

              <div className="msg">Press&nbsp;
                <FontAwesomeIcon icon={faAppleAlt} />&nbsp;
                to&nbsp;Unlock</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LockScreen;
