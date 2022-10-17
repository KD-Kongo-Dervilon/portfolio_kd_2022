import React from "react";
import Logo from "../components/Logo";
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Projects from "../components/Projects";


const PetitsPlats = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <Logo/>
                <Projects projectNumber={3}/>
                    <Buttons left={"/fisheye"} right={"/kasa"}/>
            </div>
        </main>
    );
};

export default PetitsPlats;