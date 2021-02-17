import React, { useState } from 'react';
import './Forms.css';
import Button from "../button/Button";

const LoginForm = ({ action }) => {

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        email: undefined,
        password: undefined,
    });

    console.log(formData)

    return (
        <div className="form_container">
            <div className="form_header">
                <div className="form_title">
                    <h1>Log in</h1>
                    <p>Need an account?
                       <a href="/" className="form_text_link"> Sign up</a>
                    </p>
                </div>
            </div>
            <div className="form_body">
                <input
                    className="form_full_input"
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
                <input
                    className="form_full_input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
            </div>

            <Button name="Log in" onClick={action} />

        </div>
    )
};

export default LoginForm;