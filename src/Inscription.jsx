import React, { useState } from "react";
import './Inscription_style.css';

function Inscription() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        cart:[],
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Reset error for the specific field being updated
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    // Validate the inputs
    const validateInputs = () => {
        const newErrors = {};

        // Check if firstname and lastname contain only letters
        if (!/^[A-Za-z]+$/.test(formData.firstname)) {
            newErrors.firstname = 'First name must contain only letters.';
        }
        if (!/^[A-Za-z]+$/.test(formData.lastname)) {
            newErrors.lastname = 'Last name must contain only letters.';
        }

        // Validate email format
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }

        // Validate passwords
        if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = 'Passwords do not match.';
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return; // Stop submission if validation fails
        }

        // Safely parse the existing data or default to an empty array
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        const updatedData = Array.isArray(existingData) ? [...existingData, formData] : [formData];

        // Save the updated array back to localStorage
        localStorage.setItem('formData', JSON.stringify(updatedData));

        // Reset form fields
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: '',
            cart:[]
        });

        // Set success message
        setSuccessMessage("Registration successful!");

        // Remove success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <>
            {successMessage && (
                <div className="message">{successMessage}</div>
            )}
            <div className="inscription-form">
                <div className="form-container">
                    <h2>Join Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
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
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                        <div className="form-group">
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
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                        <div className="form-group">
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
                        {errors.email && <p className="error">{errors.email}</p>}
                        <div className="form-group">
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
                        {errors.password && <p className="error">{errors.password}</p>}
                        <div className="form-group">
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
                        {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
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
