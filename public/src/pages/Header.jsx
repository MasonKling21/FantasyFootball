import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>

        <p className='pageTitle'>A Fantasy Football Website</p>
        <p className='right'><a href="/players">Players</a> | <a href="/register">Register</a> | <a href="/login">Login</a></p>
    
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 0;
padding: 10px;
padding-top: 0; 
.pageTitle {
  font-weight: bold;
}
p {
  font-size: 30px;
}
.right {
  text-align: right;
}
a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-shadow: 0 0 2px white;
  transition: all .4s ease;
  -webkit-transition: all .4s ease;
}
`;

export default Header