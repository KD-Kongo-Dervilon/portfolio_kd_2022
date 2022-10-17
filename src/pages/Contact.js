import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import logo from '../assets/logo/Logo.svg';
import Buttons from '../components/Buttons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from "framer-motion"


const Contact = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 200,
        },
    }

    return (
        <main>
            <Mouse/>
            <motion.div 
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.4 }}
                className="contact"
                >
                <Navigation/>
                <Logo/>
                <ContactForm/>
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4> 72 rue du pas de notre dame </h4>
                            <p> 37100 Tours </p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard
                                text="0636158831"
                                className="hover"
                            >
                                <p
                                    style={{cursor: "pointer"}}
                                    className="clipboard"
                                    onClick={() => {
                                        alert("Téléphone copié !")
                                    }}
                                >
                                    06-36-15-88-31 
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard
                                text="dervilon.mbissi@gmail.com"
                                className="hover"
                            >
                                <p
                                    style={{cursor: "pointer"}}
                                    className="clipboard"
                                    onClick={() => {
                                        alert("Email copié !")
                                    }}
                                >
                                    dervilon.mbissi@gmail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="credits">
                        <img src={logo} alt="logo" className='logo'/>
                    </div>
                </div>
                <Buttons left={"/wealth"}/>
            </motion.div>
        </main>
    );
};

export default Contact;
