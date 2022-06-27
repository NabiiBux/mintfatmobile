import React from "react";
export default function Collection(){
    return (
        <section className="instruction-section" id="instructions">
          <h2 className="section-title">Partnership</h2>
          {/* <p className="instruction-text base-text">The price of each Shiba NFT card is 0.05 Ether, they are distributed on the Ethereum network, and there is a total of 5000 cards.</p> */}
          <div className="instr-wrap">
            <div className="instr">
              <div className="instr__wrap">
                <div className="instr__row" style={{backgroundImage: "url('../img/logoall.png')"}}></div>
              </div>
            </div>
          </div>
        </section>
    );
}