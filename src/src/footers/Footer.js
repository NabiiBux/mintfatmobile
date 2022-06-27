import React from 'react';
const Footer = () => {
    return (
        <footer className="footer_div" style={{marginTop:800}}>
            {/* <img src={'img/img.png'} title="" alt="" style={{minHeight:'750px'}} height={'750px'} width="100%" className="hidden-xs"/> */}
                {/* <img src={'img/img.png'} style={{minHeight:'100px'}} title="" alt="" width="100%" className="visible-xs"/> */}
                    <div className="footer_position">
                        <div className="footer_position_flex">
                            <div className="footer_position_inner">
                                <div className="footer_position_inner_left">
                                    <h3>
                                        <em>JOIN</em><br/>
                                        Fate12 NFT
                                    </h3>
                                    <p>Become a member of the strongest and fast growing <br/> NFTs community.</p>
                                    <div className="footer_btn_flex">
                                        <div className="footer_btn_inner">
                                            <a href="https://discord.com/invite/UZhwK2zz/" className="btn"> <img
                                                src="img/btn_img2.png" title="" alt=""/> <span>DISCORD</span></a>
                                        </div>
                                        <div className="footer_btn_inner">
                                            <a href="#" className="btn btn2"> <img src="img/btn_img4.png" title=""
                                                                                  alt=""/> <span>OPEN SEA</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_position_inner hidden-xs">
                                <div className="footer_position_logo">
                                    <a href="#home">
                                        <img src="img/new/logo.gif" title="" alt=""/>
                                        {/* <video id="myvideo2" width="250" height="250" autoplay="autoplay" playsinline muted loop>
                                           <source src="img/new/Logo Comp.mp4" type="video/mp4" />
                                        </video> */}
                                    </a>
                                </div>
                            </div>
                            <div className="footer_position_inner">
                                <div className="footer_position_inner_right">
                                    <h3>
                                        <em>MINT</em><br/>
                                        MINT IS LIVE
                                    </h3>
                                    <div className="footer_position_inner_ticket">
                                        <a href="https://opensea.io/fat12nft/" className="btn">Buy On Opensea</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_position_inner visible-xs">
                                <div className="footer_position_logo">
                                    <a href="/">
                                    {/* <img src="img/new/logo.gif" title="" alt=""/> */}
                                        {/* <video id="myvideo2" width="250" height="250" autoplay="autoplay" playsinline muted loop>
                                           <source src="img/new/Logo Comp.mp4" type="video/mp4" />
                                        </video> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom_flex">
                            <div className="footer_bottom_inner visible-xs">
                                <div className="social_bottommenu">
                                    <ul>
                                        <li><a href="https://twitter.com/Fat12Nft/" target="blank"><img
                                            src="img/social1.png" title="" alt=""/></a></li>
                                        <li><a href="http://discord.gg/invite/UZhwK2zz/" target="blank"><img
                                            src="img/social2.png" title="" alt=""/></a></li>
                                        <li><a href="https://opesea.com/fat12nft/" target="blank"><img
                                            src="img/social3.png" title="" alt=""/></a></li>
                                        <li><a href="https://www.instagram.com/fat12club/" target="blank"><img
                                            src="img/social4.png" title="" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_bottom_inner">
                                <h6>© 2022 Fate12 NFT. ALL RIGHTS RESERVED</h6>
                            </div>
                            <div className="footer_bottom_inner hidden-xs">
                                <div className="social_bottommenu">
                                <ul>
                                        <li><a href="https://twitter.com/Fat12Nft/" target="blank"><img
                                            src="img/social1.png" title="" alt=""/></a></li>
                                        <li><a href="http://discord.gg/invite/UZhwK2zz/" target="blank"><img
                                            src="img/social2.png" title="" alt=""/></a></li>
                                        <li><a href="https://opesea.com/fat12nft/" target="blank"><img
                                            src="img/social3.png" title="" alt=""/></a></li>
                                        <li><a href="https://www.instagram.com/fat12club/" target="blank"><img
                                            src="img/social4.png" title="" alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_bottom_inner">
                                <div className="footer_bottom_ul">
                                    <ul>
                                        <li><a href="#">PRESS RELEASE</a></li>
                                        <li>|</li>
                                        <li><a href="#">COMING &amp; SOON</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        </footer>);
}
    export default Footer;