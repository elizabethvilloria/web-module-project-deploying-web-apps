import React, { useState } from "react";

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="form-container">
            <h1>Super Duper Simple Form.</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <h3>Submitted Data:</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Message: {submittedData.message}</p>
                </div>
            )}
        </div>
    );
};

export default SimpleForm;