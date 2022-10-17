import React from "react";
import Logo from "../components/Logo";
import Mouse from '../components/Mouse';
import Buttons from '../components/Buttons';
import Projects from "../components/Projects";
import Navigation from "../components/Navigation";


const Reservia = () => {
  return (
    <main>
      <Mouse/>
      <div className="project">
        <Navigation/>
        <Logo/>
        <Projects projectNumber={0}/>
        <Buttons left={"/"} right={"/ohmyfood"}/>
      </div>
    </main>
  );
};

export default Reservia;
