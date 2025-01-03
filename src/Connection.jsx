import "./Connection.css";
import React, { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Connection({ handleLogin }) {
    const navigate = useNavigate(); // Initialisation de la navigation
    const data = JSON.parse(localStorage.getItem("formData"))

    console.log(data)

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
        const userFound = data.find(
            (item) => item.email === email.trim() && item.password === password.trim()
        );

        if (userFound) {
            setMessage("Connexion réussie !");
            setMessageClass("succes");
            localStorage.setItem("cart", JSON.stringify(userFound.cart || []));
            localStorage.setItem("isLoggedEmail",userFound.email);
            localStorage.setItem("isLogged", "connecter");
            handleLogin(); // Appelle la fonction de connexion du parent
            setTimeout(() => {
                navigate("/"); // Redirige vers la page d'accueil
            }, 1000);
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
                <h4 className="a12">Qui va là ?</h4>
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
                    <Link style={{ textDecoration: "none" }} to={"/Inscription"}>
                        Sign in
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={"/LostPassword"}>
                        Reset Password
                    </Link>

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
