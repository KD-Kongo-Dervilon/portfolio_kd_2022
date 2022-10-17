import React from "react";
import Logo from "../components/Logo";
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Projects from "../components/Projects";


const FishEye = () => {
  return (
    <main>
      <Mouse/>
      <div className="project">
        <Navigation/>
        <Logo/>
        <Projects projectNumber={2}/>
        <Buttons left={"/ohmyfood"} right={"/petitplat"}/>
      </div>
    </main>
  );
};

export default FishEye;
