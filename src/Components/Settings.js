import React from "react";
import '../CSS/App.css';
import Header from './Header';
import '../CSS/screen.css';

const Settings = (props) => {
    return (
        <div className="screen">
            <div className="screen-structure">
                <div className="screen-main-menu">
                    <Header />
                    <div className="main-menu">
                        <div className="sign-in-submenu">
                            <img className='sign-in-image1' src="assets/menu-images/settings-logo-3.png"></img>
                            <h1 className="sign-in-image2">Settings</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
