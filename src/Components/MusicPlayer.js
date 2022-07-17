import React from "react";
import '../CSS/App.css';
import Header from './Header';
import '../CSS/screen.css';

const MusicPlayer = (props) => {
    return (
        <div className="screen">
            <div className="screen-structure">
                <div className="screen-main-menu screen-main-music">
                    <Header />
                    <div className="main-menu">
                        <div className="music-player">
                            <div className="music-player-img">
                                <img className='sign-in-image1' src='assets/menu-images/eng1.jpg'></img>
                            </div>
                            <div className="music-player-text">
                                <span>Hips Don't Lie</span>
                                <span>Shakira</span>
                            </div>
                        </div>

                    </div>
                    <div className="music-player-time">
                        <audio id="player" controls>
                            <source src="audio/Hips-dont-lie.mp3" type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
