import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".formMessage");

    emailjs
        .sendForm(
            "service_wkj142h",
            "template_2ru63bj",
            form.current,
            "d_wS0S0R0Dn4BaIaB"
        )
        .then(
            (res) => {
            console.log(res.text);
            form.current.reset();
            formMess.innerHTML = 
                "<p class='success'>Message envoyé !</p>";

            setTimeout(() => {
                formMess.innerHTML = "";
            }, 2000);
        },
        (err) => {
            console.log(err.text);
            formMess.innerHTML =
                "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

                setTimeout(() => {
                    formMess.innerHTML = "";
                }, 2000);
            }
        );
    };

    return (
        <div className="form-container">
            <h2>contactez-Moi</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label htmlFor="name">Nom</label>
                <input type="text" name="user_name" required autoComplete="off" id="user_name" />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="user_email"
                    required
                    autoComplete="off"
                    id="user_email"
                />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="mess" />
                <input type="submit" value="Envoyer" className="hover button" />
            </form>
            <div className="formMessage"></div>
        </div>
    );
};

export default ContactForm;