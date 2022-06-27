import React from 'react';

const HomeBanner = ()=>{
    return (
        <div className="home_banner" id="home">
            <div className="hidden-xs">
                <img src={'img/new/banner_mob.jpeg'} style={{minHeight:'700px'}} title="" alt="" width="100%"/>
            </div>
            <div className="visible-xs">
                <img src={'img/new/banner_mob.jpeg'} style={{minHeight:'500px'}}  title="" alt="" width="100%"/>
            </div>
            <div className="home_banner_position" style={{marginTop:120}}>
                <div className="home_banner_text" data-aos="fade-up" data-aos-duration="1000">
                    <h4>Ready to take over the NFT space ?</h4>
                    <h3><em>JOIN</em> <span>Fate12</span> NFT</h3>
                    <p>Hello art collectors, you have stumbled into the space of art lovers that express their aesthetic idea through the zodiac sign. As we celebrate the beauty of the ancient art style, we will also always make sure that Fate 12 NFT club is always up to date. Keep your eye on this page as we unveil the grand plan of the project. 
</p>
                    <div className="btn_flex">
                        <div className="btn_flex_inner"><a href="/mint" className="btn" style={{padding:"10px 80px !important"}}>
                            
                            MINT</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll_down">
           </div>
            {/* <div className="banner_icon banner_icon1 hidden-xs" data-aos="fade-left"
                 data-aos-duration="1000">
                <img src="img/banner_icon1.png" title="" alt="" style={{borderRadius:400, height:150}}/>
            </div>
            <div className="banner_icon banner_icon2  hidden-xs" data-aos="fade-left"
                 data-aos-duration="1000">
                <img src="img/banner_icon2.png" title="" alt="" style={{borderRadius:400, height:150}}/>
            </div>
            <div className="banner_icon banner_icon3  hidden-xs" data-aos="fade-left"
                 data-aos-duration="1000">
                <img src="img/banner_icon3.png" title="" alt="" style={{borderRadius:400, height:150}}/>
            </div> */}
        </div>
    );
}
export default HomeBanner