import React from 'react';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';


const ArgentBank = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <Logo/>
                <Projects projectNumber={6}/>
                <Buttons left={"/sportsee"} right={"/wealth"} />
            </div>
        </main>
    );
};

export default ArgentBank;