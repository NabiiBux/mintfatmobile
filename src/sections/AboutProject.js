import React from 'react';

const AboutProject = () => {
    return (
        <div className="home_what" id="intro">
            <div className="container">
                <div className="home_welcome" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Welcome To The Exclusive Fate12 Club</h3>
                    <p>Join this ultra-exclusive NFT project featuring not only authentic art, but unmatched
                        <br/>
                        utility!
                    </p>
                    <a href="https://opensea.io"
                       className="btn"><span>VIEW ALL COLLECTION</span> <img src="img/btn_img3.png" title="" alt=""/></a>
                </div>
                <div className="what_flex">
                    <div className="what_inner">
                        <div className="what_inner_text visible-xs" data-aos="fade-up"
                             data-aos-duration="1000">
                            <h3><em>WHAT IS</em> Fate12 CLUB?</h3>
                        </div>
                        <div className="what_inner_img" data-aos="fade-right"
                             data-aos-duration="1000">
                            <img src="img/new/IMG_7903.JPG" title="" alt=""/>
                                {/* <div className="round_icon round_icon1" style={{height:120}}>
                                    <img src="img/round_icon1.png" title="" alt="" style={{ width:"100%",borderRadius:400,objectFit: "cover", objectPosition:"50% 50%"}}/>
                                </div>
                                <div className="round_icon round_icon2" style={{height:120}}>
                                    <img src="img/round_icon2.png" title="" alt="" style={{width:"100%",borderRadius:400,objectFit: "cover", objectPosition:"50% 50%"}}/>
                                </div>
                                <div className="round_icon round_icon3" style={{height:120}}>
                                    <img src="img/round_icon3.png" title="" alt="" style={{width:"100%",borderRadius:400,objectFit: "cover", objectPosition:"50% 50%"}}/>
                                </div> */}
                        </div>
                    </div>
                    <div className="what_inner">
                        <div className="what_inner_text" data-aos="fade-left"
                             data-aos-duration="1000">
                            <h3 className="hidden-xs"><em>WHAT IS</em><br/>Fate12 CLUB?</h3>
                            <p>The NFT space is growing at a phenomenal
                                pace and many opportunities are arising from
                                it.
                                The Fate12$ Club is a decentralized
                                organization based on a 7676 NFT collection.
                                Each NFT is unique and represents the
                                Fate12 of the NFT space, called
                                Fate12Fate12.
                                The Fate12$ are stored as ERC-721 tokens
                                on the Ethereum blockchain</p>
                            <p>Fate12$ allows its owner to join the
                                Fate12 Club, to benefit from its
                                network and take part of the Club
                                Governance.</p>
                            <h4>
                                The Fate12 Club aims to develop an
                                entrepreneur community. The Fate12 are
                                united by the true desire to succeed both
                                personally and collectively through their
                                network.
                                Like the NFT space, we are evolving in an
                                increasingly digital and constantly
                                improving environment.
                                Fate12$ Club is the connection between
                                the real life and the NFT space.
                                Integrating this universe into its genesis
                                will provide access to unique
                                opportunities.

                            </h4>
                            <div className="join_btn">
                                <a href="#" className="btn"> <img src="img/btn_img2.png" title="" alt=""/> <span>JOIN OUR DISCORD</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutProject