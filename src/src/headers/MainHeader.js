import React from 'react';
import { Link } from 'react-router-dom';


function MainHeader() {
    return (
        <header className="header_main desktop_header">
            <div className="container">
                <div className="header_inner">
                    <div className="header_flex" style={{ marginTop: 20 }}>
                        <div className="header_menu header_menu1">
                            <ul>
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#intro"> WHAT IS FATE12</a></li>
                                {/* <li><a href=""><Link to={'/mint'}>Mint</Link></a></li> */}
                                <li><a>
                                    &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                            </ul>
                        </div>
                        <div className="header_logo">
                            <a href="/" className="heder_logo">
                                <img src="img/new/logo3.gif" style={{ width: 150 }} alt="logo" />
                                {/* <video id="myvideo" width="100" height="100" autoplay="autoplay" playsinline muted loop>
                                    <source src="img/new/Logo Comp.mp4" type="video/mp4" />
                                </video> */}
                            </a>
                        </div>
                        <div className="header_menu header_menu2">
                            <ul>
                                <li><a href="#roadmap">ROADMAP</a></li>
                                <li><a href="#team">THE TEAM</a></li>
                                <li><a href="#faq">FAQ’S</a></li>
                                <li>
                                    <a href="https://opensea.io/fat12nft/" className="btn" style={{ height: 51 }}>
                                        {/*<img src="img/pirate1-logo2-t.png" title="" alt=""/>*/}
                                        Buy On Opensea
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social_menu">
                        <ul>
                            <li>
                                <a href="https://twitter.com/Fat12Nft/">
                                    <img src="img/social1.png" title="" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.com/invite/UZhwK2zz/">
                                    <img src="img/social2.png" title="" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://opensea.io/fat12nft/">
                                    <img src="img/social3.png" title="" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/fat12club/">
                                    <img src="img/social4.png" title="" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
