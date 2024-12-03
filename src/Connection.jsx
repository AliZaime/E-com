import "./Connection.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Connection() {
    const data = [
        { mail: "hmizourais557@gmail.com", password: "hamzay989" },
        { mail: "hamzaraisbussi@gmail.com", password: "Halamadrid2004" },
        { mail: "h.rais@esisa.ac.ma", password: "hamzayxq" },
        { mail: "hamzarais798@gmail.com", password: "iftahyasimsim" },
    ];

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageClass, setMessageClass] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const clearInput = () => {
        setEmail(""); // Réinitialiser l'email
    };

    const verifierconnexion = () => {
        const userFound = data.some(
            (item) => item.mail === email.trim() && item.password === password.trim()
        );

        if (userFound) {
            setMessage("Connexion réussie !");
            setMessageClass("succes");
        } else {
            setMessage("Échec de la connexion !");
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

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
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
                <h4>Qui va là ?</h4>
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

                    {/* Password input */}
                    <div className="inputdiv">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Mot de passe"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <i
                            className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"} eye-icon`}
                            onClick={togglePasswordVisibility}
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>

                    
                    <Link to="/LostPassword" className="lostpassword">mot de passe oublié ?</Link>

                    <button className="connexion" type="button" onClick={verifierconnexion}>
                        <i className="fa-solid fa-right-to-bracket"></i> Connexion
                    </button>
                </form>

                <button className="googlebtn">
                        <img src="/images/google.webp" alt="Google" />
                        <h3>Google</h3>
                </button>

                    <button className="googlebtn">
                        <img src="/images/apple.png" alt="Apple" />
                        <h3>Apple</h3>
                    </button>
            </div>

        </>
    );
}

export default Connection;
