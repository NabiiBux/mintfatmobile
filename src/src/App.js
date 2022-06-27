import logo from './logo.svg';
import './App.css';
import MainHeader from "./headers/MainHeader";
import MobileHeader from "./headers/MobileHeader";
import HomeBanner from "./sections/HomeBanner";
import AboutProject from "./sections/AboutProject";
import WhatIsThisProjectAvatar from "./sections/WhatIsThisProjectAvatar";
import ProjectBenefits from "./sections/ProjectBenifits";
import SpecialItems from "./sections/SpecialItems";
import RoadMap from "./sections/RoadMap";
// import JoinCommunity from "./sections/JoinCommunity";
import FAQ from "./sections/FAQ";
import Footer from "./footers/Footer";
import MeetTeam from "./sections/MeetTeam";
// import Collection from './sections/Collection';
// import RoadMapText from './sections/RoadMapText';
import HolderUtility from './sections/HolderUtility';
import Attributes from './sections/Attributes';
import GameUtility from './sections/GameUtility';
import Attributes2 from './sections/Attribute2';
//import Minting from "./sections/Minting-section/Minting-section"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MintHeader from './headers/MintHeader';
import MintMobileHeader from './headers/MintMobileHeader';
import Partner from './sections/Partner';
import Mint from './sections/Mint';

function App() {
  return (
    <>

      <Switch>
        <Route exact path="/" >
          <MainHeader />
          <MobileHeader />
          <HomeBanner />
         
          <AboutProject />
          {/* <WhatIsThisProjectAvatar/> */}
          {/* <ProjectBenefits/> */}
          {/* <SpecialItems/> */}

          <RoadMap />
          <HolderUtility />
          {/* <Attributes/> */}
          <Attributes2 />
          <GameUtility />
          <MeetTeam />
         
          {/* <RoadMapText/> */}
          {/* <JoinCommunity/> */}
          <FAQ />
          <Partner/>
          {/* <Collection/> */}
        </Route>
        <Route exact path="/mint">
           <MintHeader/>
           <MintMobileHeader/>
           
           <Mint/> 
        </Route>
      </Switch>



      <Footer />
    </>
  );
}

export default App;
