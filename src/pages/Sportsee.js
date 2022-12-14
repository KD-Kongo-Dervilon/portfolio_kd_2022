import React from 'react';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';


const Sportsee = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <Logo/>
                <Projects projectNumber={5}/>
                <Buttons left={"/kasa"} right={"/argentbank"} />
            </div>
        </main>
    );
};

export default Sportsee;