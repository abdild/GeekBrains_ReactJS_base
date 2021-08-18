import React, { useState } from "react";
import firebase from "firebase";
import { useInput } from "../../utils/useInput";
import "./styles.css";
import { Link } from "react-router-dom";

export const Login = ({ isSignUp }) => {
    const [error, setError] = useState("");
    const {
        value: email,
        handleChange: handleChangeEmail,
        reset: resetEmail,
    } = useInput("");

    const {
        value: password,
        handleChange: handleChangePassword,
        reset: resetPassword,
    } = useInput("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }

        try {
            if (isSignUp) {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            } else {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            }
            resetEmail();
            resetPassword();
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    return (
        <>
            <div style={{ fontWeight: 400, paddingBottom: 16 }}>{isSignUp ? "SIGN UP" : "LOGIN"}</div>
            <form style={{ width: 200 }} className="login-form" onSubmit={handleSubmit}>
                <input style={{ padding: 4 }}
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <input style={{ padding: 4 }}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <input style={{ padding: 2, marginTop: 12 }} type="submit" />
                {error && <span>{error}</span>}
            </form>
            <Link to={`${isSignUp ? "/login" : "/signup"}`}>
                <button style={{ width: 100, backgroundColor: "green", fontSize: 12, fontWeight: 300, color: "white", marginTop: 12, padding: 6, borderRadius: 12 }}>
                    {!isSignUp ? "SIGN UP" : "LOGIN"}
                </button>
            </Link>
        </>
    );
};