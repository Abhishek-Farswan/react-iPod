import React from "react";
import '../CSS/App.css';
import Header from './Header';
import '../CSS/screen.css';

const SignIn = (props) => {
    return (
        <div className="screen">
            <div className="screen-structure">
                <div className="screen-main-menu">
                    <Header />
                    <div className="main-menu">
                        <div className="sign-in-submenu">
                            <img className='sign-in-image1' src='assets/menu-images/signin_logo.jpg'></img>
                            <img className='sign-in-image2' src='assets/menu-images/sign-in-apple.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
