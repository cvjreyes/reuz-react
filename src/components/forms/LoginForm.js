import React, { useState } from 'react';
import './Forms.css';
import Button from "../button/Button";
import { useHistory } from 'react-router-dom';

const LoginForm = ({ changeModal, action }) => {

    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        email: undefined,
        password: undefined,
    });

    const body = {
        email: formData.email,
        password: formData.password
    }

    const handleLogin = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

        fetch("http://localhost:5000/login", options)
            .then((response) => response.json())
            .then((json) => {
                localStorage.setItem("token", json.token);
                localStorage.setItem("user", JSON.stringify(json.user));
                if (json) {
                    console.log('Login Succesfull', json);
                    history.replace("/yourListings")
                } else {
                    console.log('Login Failed!')
                }
                window.location.reload(false);
            });

        action();
    };

    return (
        <div className="form_container">
            <div className="form_header">
                <div className="form_title">
                    <h1>Log in</h1>
                    <p>Need an account?
                       <a onClick={changeModal} className="form_text_link"> Sign up</a>
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

            <Button name="Log in" onClick={handleLogin} />

        </div>
    )
};

export default LoginForm;