import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';

class Login extends React.Component {
    state = {
        username: ""
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8080/api/login");
        const data = await response.json();
    
        this.setState({username: data});
    }

    render() {
        return (
            <>
            <Header/>


            <FormContainer>
                <form action="http://localhost:8080/api/login/" method="GET">
                    <h1> Login </h1>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <button type="submit">Login</button>
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
    height: 40vh;
    width: 80%;
    gap: 20px;
}
a {
    color: white;
    text-decoration: none;
}
button {
    margin-bottom: 20px;
}
    `;

export default Login