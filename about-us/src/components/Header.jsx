// components/Header.js
import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    &:hover {
      color: #aaa;
    }
  }
`;

const Header = () => (
  <NavBar>
    <NavList>
      <NavItem><a href="#overview">Overview</a></NavItem>
      <NavItem><a href="#about">About Us</a></NavItem>
      <NavItem><a href="#contact">Contact</a></NavItem>
      <NavItem><a href="#features">Features</a></NavItem>
      <NavItem><a href="#privacy">Privacy Policy</a></NavItem>
      <NavItem><a href="#terms">Terms of Use</a></NavItem>
    </NavList>
  </NavBar>
);

export default Header;
