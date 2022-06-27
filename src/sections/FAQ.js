import React from "react";

const FAQ = ()=>{
    return (
        <div className="home_faq" id="faq">
        <div className="container">
            <div className="home_faq_max">
                <div className="home_road_map_heading">
                    <h3><em>FREQUENTLY </em> <br/> ASKED QUESTIONS</h3>
                </div>
                <div className="home_faq_flex">
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab1">
                            <h6 className="accordion">WHEN IS THE OFFICIAL LUNCH ?</h6>
                            <div className="panel accordian-para acc-show" id="tab1">
                                <p>The official Lunch date will be the Tuesday 4th January at 7PM UTC</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab2">
                            <h6 className="accordion">WHAT WILL BE THE PRICE ?</h6>
                            <div className="panel accordian-para acc-show" id="tab2">
                                <p>The Price of Minting will be 0.4ETH + Gas Fees</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab3">
                            <h6 className="accordion">HOW DO I GET WHITELISTED ?</h6>
                            <div className="panel accordian-para acc-show" id="tab3">
                                <p>Our Whitelist is still open, you can check all the info on our discord
                                </p></div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab4">
                            <h6 className="accordion">HOW I CAN BUY A Fate12 NFT ?</h6>
                            <div className="panel accordian-para acc-show" id="tab4">
                                <p>You will be able to buy only on our website when we launch.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab5">
                            <h6 className="accordion">WHERE I WILL BE ABLE TO SEE MY NFT ?</h6>
                            <div className="panel accordian-para acc-show" id="tab5">
                                <p>Once you have minted a Fate12 Club NFT, you will be able to see it by connecting your
                                    wallet to OpenSea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home_faq_inner">
                        <div className="faq_1 ac-title" data-in="#tab6">
                            <h6 className="accordion">WHY Fate12 ?</h6>
                            <div className="panel accordian-para acc-show" id="tab6">
                                <p>When you buy a Fate12 Club, you’re not simply buying a simple NFT, you are getting
                                    access to a community where benefits and utilities will increase with the time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="view_all">
                    <a href="#" className="btn"><span>LOAD MORE QUESTION</span>
                        <img src="img/btn_img3.png" title="" alt=""/></a>
                </div> */}
            </div>
        </div>
    </div>);
}
export default FAQ;