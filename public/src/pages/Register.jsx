import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

class Register extends React.Component {
    state = {
        username: ""
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8080/api/user");
        const data = await response.json();
    
        this.setState({username: data});
    }

    render() {
        return (
            <>
            <Header/>

            <FormContainer>
                <form action="http://localhost:8080/api/user/" method="GET">
                    <h1> Register </h1>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                    />
                    <button type="submit">Create User</button>
                    <span> 
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                </form>
            </FormContainer>
        </>
        )
    }
}

const FormContainer = styled.div`
margin: auto;
width: 30%;
background-color: #084F6F;
border-radius: 10px;
box-shadow: 0 0 10px 10px #00000096;
form {
    margin: auto;
    display: grid;
    height: 60vh;
    width: 80%;
    gap: 20px;
}
a {
    color: white;
    text-decoration: none;
}
    `;

export default Register