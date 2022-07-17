import React from "react";
import '../CSS/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'

function Header() {
        let currentDate = new Date();
        let d = currentDate.toDateString();
        let t = currentDate.getHours() + ":" + currentDate.getMinutes();
        return (
                <div className="screen-main-battery">
                        <time className="header-time">{t}</time>
                        <span className="ipod-text">iPod</span>
                        <FontAwesomeIcon className='wheel-holder-icons battery-icon' icon={faBatteryThreeQuarters} />
                </div>
        );
}

export default Header;