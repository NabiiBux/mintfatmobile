import React from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';

function MobileHeader() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <header className="mobile_header">
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawer'
                style={{background:"linear-gradient(-120deg, #D62121, #C72C2C, #3a1111)", border:"1px solid black", width:"55%", right:0}}
            >
                 <div className="home_road_map_heading" style={{margin:20, borderBottom:"1px solid white"}}>
                    <h3><em>FATE12 </em></h3>
                </div>
                <div className="home_road_map_heading" style={{margin:20}}>
                    <h6><a href="#home"><em>HOME</em></a></h6>
                </div>
                <div className="home_road_map_heading" style={{margin:20}}>
                    <h6><a href="#intro"><em>WHAT IS FATE12</em></a></h6>
                </div>
               
                <div className="home_road_map_heading" style={{margin:20}}>
                    <h6><a href="#roadmap"><em>ROADMAP</em></a></h6>
                </div>
                <div className="home_road_map_heading" style={{margin:20}}>
                    <h6><a href="#team"><em>HE TEAM</em></a></h6>
                </div>
                <div className="home_road_map_heading" style={{margin:20}}>
                <h6><a href="#faq"><em>FAQ’S</em></a></h6>
                </div>
            </Drawer>
            <div className="container">
                <div className="mobile_header_flex">
                    <div className="mobile_header_inner">
                        <div className="mobile_header_logo">
                            <a href="/" className="heder_logo">
                                <img src="img/new/logo3.gif"  alt="logo"/>
                                {/* <video id="myvideo" width="80" height="80" autoplay="autoplay" playsinline muted loop>
                                    <source src="img/new/Logo Comp.mp4" type="video/mp4" />
                                </video> */}
                            </a>
                        </div>
                    </div>
                    <div className="mobile_header_inner">
                        <ul>
                            <li><a href="https://opensea.io/collection/bored-bunny--nft" className="btn">{/*<img
                                src="img/btn_img1.png" title="" alt=""/>*/}Buy On Opensea</a></li>
                            <li onClick={toggleDrawer}><img src="img/mobile_menu.png" title="" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MobileHeader;
