import React, { useState } from 'react';
import './Forms.css';
import Button from "../button/Button";
import { useHistory } from 'react-router-dom';

const SignupForm = ({ changeModal, action }) => {

    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        name: undefined,
        lastname: undefined,
        email: undefined,
        password: undefined,
    });

    const body = {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password
    }

    //Fetch function
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch("http://localhost:5000/api/users", options)
            .then(async () => {
                /* authomatic login & redirection to manager page once signed up */
                return await fetch("http://localhost:5000/login", options)
                    .then((response) => response.json())
                    .then((json) => {
                        localStorage.setItem("token", json.token);
                        localStorage.setItem("user", JSON.stringify(json.user));
                        history.replace("/managePage");
                        window.location.reload(false);
                    });
            });
        action();
    };

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
                            setFormData({ ...formData, name: e.target.value })
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

            <Button name="Sign up" onClick={handleCreate} />

        </div>
    )
};

export default SignupForm;