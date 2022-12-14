import React from "react";
import Logo from "../components/Logo";
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Projects from "../components/Projects";


const Kasa = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <Logo/>
                <Projects projectNumber={4}/>
                <Buttons left={"/petitplat"} right={"/sportsee"}/>
            </div>
        </main>
    );
};

export default Kasa;
