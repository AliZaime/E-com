import "./LostPassword.css";
import React, { useState } from "react";

function LostPassword() {
    const data = [
        { mail: "hmizourais557@gmail.com"},
        { mail: "hamzaraisbussi@gmail.com",},
        { mail: "h.rais@esisa.ac.ma",},
        { mail: "hamzarais798@gmail.com"},
    ];

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageClass, setMessageClass] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };


    const clearInput = () => {
        setEmail(""); // Réinitialiser l'email
    };

    const verifierconnexion = () => {
        const userFound = data.some(
            (item) => item.mail === email.trim()
        );

        if (userFound) {
            setMessage("Verifier votre Mail");
            setMessageClass("succes");

        } else {
            setMessage("E-mail non correcte !");
            setMessageClass("denied");
        }

        setShowMessage(true);

        // Masquer le message après 3 secondes
        setTimeout(() => {
            setShowMessage(false);
            setTimeout(() => {
                setMessage("");
                setMessageClass("");
            }, 1000);
        }, 3000);
    };

    return (
        <>
         {showMessage && (
                <p id="connxionState" className={messageClass}>
                    {message}
                    <i
                        className={`fa-solid ${
                            messageClass === "succes" ? "fa-check-circle" : "fa-times-circle"
                        }`}
                        style={{ marginLeft: "10px" }}
                    ></i>
                </p>
            )}
            <div className="connform">
                <h4>Reset Password</h4>
                <form>
                    {/* Email input */}
                    <div className="inputdiv" id="emailinput">
                        <input
                            type="email"
                            placeholder="Adresse e-mail"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <div id="iconplaceholder">
                            {email.length === 0 ? (
                                <i className="fa-solid fa-envelope mail-icon"></i>
                            ) : (
                                <i
                                    className="fa-regular fa-circle-xmark circlemark"
                                    onClick={clearInput}
                                    style={{ cursor: "pointer", color: "red" }}
                                ></i>
                            )}
                        </div>
                    </div>

                    <button className="connexion" type="button" onClick={verifierconnexion}>
                        <i className="fa-solid fa-right-to-bracket"></i> Envoyer l'E-mail
                    </button>
                </form>
            </div>

        </>
    );
}

export default LostPassword;
