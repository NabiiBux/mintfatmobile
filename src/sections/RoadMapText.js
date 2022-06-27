import React from "react";
export default function RoadMapText(){

    return (
        <section className="map-section" id="roadmap">
          <div className="container">
            <div className="map-wrap">
              <div className="map-block map-block_road" style={{backgroundImage: "url('img/roket2.png')"}}>
                <h2 className="section-title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">// Roadmap</h2>
                <p className="map-desc scroll scroll-wrap aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true"> </p>
              </div>
              <div className="map-block map-block_fits">
                <div className="map">
                  <div className="map__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true"><span className="map__percent">100%</span>
                    <p className="map-desc">Start working on CyberShibas Metaverse NFT Game!</p>
                  </div>
                  <div className="map__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true"><span className="map__percent">80%</span>
                    <p className="map-desc">Start working at second collection in CyberShibas Metaverse</p>
                  </div>
                  <div className="map__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1300" data-aos-once="true"><span className="map__percent">60%</span>
                    <p className="map-desc">5 ETH Giveaway between CyberShibas Holders!</p>
                  </div>
                  <div className="map__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true"><span className="map__percent">40%</span>
                    <p className="map-desc"> 10 NFT Giveaway for Twitter followers.</p>
                  </div>
                  <div className="map__item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"><span className="map__percent">20%</span>
                    <p className="map-desc"> 10 NFT Giveaway for Discord users.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}