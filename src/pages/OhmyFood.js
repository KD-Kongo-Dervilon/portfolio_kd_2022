import React from "react";
import Logo from "../components/Logo";
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Projects from "../components/Projects";


const OhmyFood = () => {
  return (
    <main>
      <Mouse/>
      <div className="project">
        <Navigation/>
        <Logo/>
        <Projects projectNumber={1}/>
        <Buttons left={"/reservia"} right={"/fisheye"}/>
      </div>
    </main>
  );
};

export default OhmyFood;
