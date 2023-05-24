import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from '../utils/firebase-config';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin() {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);    //firebaseAuth is imported from firebase.js
        } catch (err) {
            alert("Không thể đăng ký tài khoản!");
            console.log(err);
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <Container >
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>Login</h3>
                        </div>
                        <div className="container flex column">
                            <input
                                type="text"
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button onClick={handleLogin}>Login to your account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
        grid-template-rows: 15vh 85vh;
        .form-container {
            gap: 2rem;
            height: 85vh;
            .form {
                padding: 2rem;
                width: 25vw;
                background-color: #0d0d12;
                gap: 2rem;
                color: white;
            }
        }
    }
    .body {
        gap: 1rem;
        .text {
            gap: 1rem;
            text-align: center;
            font-size: 2rem;
            h1 {
                padding: 0 25rem;
            }
        }
        .form{
            display: grid;
            grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
            width: 60%;
            input {
                color: black;
                border: none;
                padding: 1.5rem;
                font-size: 1.2rem;
                border-radius: 2px;
                border: 1px solid black;
                &:focus {
                    outline: none;
                }
            }
            button {
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                font-weight: bolder;
                font-size: 1.05rem;
                border-radius: 8px;
            }
        }
        button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
        }
    }
`;

export default Login;