import React, { useState, useEffect } from "react";
import './Inscription_style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Inscription() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        phone: '',
        adresse: '',
        cart: [],

    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const isEmailExists = (email) => {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        return storedData.some((data) => data.email === email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Removed `trim()` to allow spaces
        });

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phone: value,
        });

        setErrors((prevErrors) => ({
            ...prevErrors,
            phone: '',
        }));
    };

    // Validation helpers
    const validateName = (name) => /^[A-Za-z]+(\s[A-Za-z]+)*$/.test(name);
    const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
    const validatePassword = (password) => password.length >= 6;
    const validatePhone = (phone) => phone && phone.length >= 10; // Adjust for country-specific rules
    const validateAdresse = (adresse) => /^.{5,100}$/.test(adresse);

    const validateInputs = () => {
        const newErrors = {};

        if (!validateName(formData.firstname)) {
            newErrors.firstname = 'First name must contain only letters.';
        }
        if (!validateName(formData.lastname)) {
            newErrors.lastname = 'Last name must contain only letters.';
        }
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }
        if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = 'Passwords do not match.';
        }
        if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 6 characters.';
        }
        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Invalid phone number.';
        }
        if (!validateAdresse(formData.adresse)) {
            newErrors.adresse = 'Address must be between 5 and 100 characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        if (isEmailExists(formData.email)) {
            setErrors({ email: 'Email already exists.' });
            return;
        }

        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        const updatedData = Array.isArray(existingData) ? [...existingData, formData] : [formData];
        localStorage.setItem('formData', JSON.stringify(updatedData));

        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: '',
            phone: '',
            adresse: '',
            cart: [],
        });

        setSuccessMessage("Registration successful!");

        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };
/**test */
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (
        <>
            {successMessage && (
                <div className="message1">{successMessage}</div>
            )}
            <div className="inscription-form1">
                <div className="form-container1">
                    <h2>Join Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group1">
                            <img src="/inscription_pic/logo_name.jpg" alt="img" />
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                placeholder="First Name"
                            />
                        </div>
                        {errors.firstname && <p className="error1">{errors.firstname}</p>}
                        <div className="form-group1">
                            <img src="/inscription_pic/logo_name.jpg" alt="img" />
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                            />
                        </div>
                        {errors.lastname && <p className="error1">{errors.lastname}</p>}
                        <div className="form-group1">
                            <img src="/inscription_pic/logo_email.png" alt="img" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                            />
                        </div>
                        {errors.email && <p className="error1">{errors.email}</p>}
                        <div className="form-group1">
                            <img src="/inscription_pic/logo_password.png" alt="img" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                            />
                        </div>
                        {errors.password && <p className="error1">{errors.password}</p>}
                        <div className="form-group1">
                            <img src="/inscription_pic/logo_confirm_password.png" alt="img" />
                            <input
                                type="password"
                                id="confirmpassword"
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                onChange={handleInputChange}
                                placeholder="Confirm Password"
                            />
                        </div>
                        {errors.confirmpassword && <p className="error1">{errors.confirmpassword}</p>}
                        <div className="form-group2 phone-input">
                            <PhoneInput
                                name="phone"
                                international
                                defaultCountry="MA"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder="Enter phone number"
                            />
                        </div>
                        {errors.phone && <p className="error1">{errors.phone}</p>}
                        <div className="form-group1">
                            <img src="/inscription_pic/adresse.png" alt="img" />
                            <input
                                type="text"
                                id="adresse"
                                name="adresse"
                                value={formData.adresse}
                                onChange={handleInputChange}
                                placeholder="Address"
                            />
                        </div>
                        {errors.adresse && <p className="error1">{errors.adresse}</p>}
                        <div className="cheking">
                            <input type="checkbox" required />
                            <label>Accept the privacy policy and terms of service.</label>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Inscription;
