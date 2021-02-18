import React, { useState } from 'react';
import './Forms.css';
import Button from "../button/Button";

const SignupForm = ({ changeModal, action }) => {

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        firstname: undefined,
        lastname: undefined,
        email: undefined,
        password: undefined,
    });

    console.log(formData)

    return (
        <div className="form_container">
            <div className="form_header">
                <div className="form_title">
                    <h1>Create account</h1>
                    <p>Already have an account?
                        <a onClick={changeModal} className="form_text_link"> Sign in</a>
                    </p>
                </div>
            </div>
            <div className="form_body">
                <div className="form_half_container" >
                    <input
                        className="form_half_input"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) =>
                            setFormData({ ...formData, firstname: e.target.value })
                        }
                    />
                    <input
                        className="form_half_input"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) =>
                            setFormData({ ...formData, lastname: e.target.value })
                        }
                    />
                </div>
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

            <Button name="Sign up" onClick={action} />

        </div>
    )
};

export default SignupForm;