import React from 'react';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';


const  WealthHealth = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <Logo/>
                <Projects projectNumber={7}/>
                <Buttons left={"/argentbank"} right={"/contact"} />
            </div>
        </main>
    );
};

export default WealthHealth;