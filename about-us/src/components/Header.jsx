import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import MutaEngine from '../assests/MutaEngine.png';

// Styled Components
const HeaderContainer = styled.header`
  background-color: #00040F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  font-family: 'Arial', sans-serif;
`;

const Logo = styled.div`
  img {
    height: 40px;
    width: 80px;
    margin-left: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  margin-left: 50px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s;

    &:hover {
      color: #00D4FF;
    }
  }
`;

const SolutionsDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover ul {
    display: block;
  }
`;

const DropdownIcon = styled(FaChevronDown)`
  margin-left: 5px;
`;

const DropdownContent = styled.ul`
  display: none;
  position: absolute;
  background-color: #00040F;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px 0;
  list-style: none;
  margin-top: 8px;

  li {
    padding: 10px 20px;
    
    a {
      color: white;
      text-decoration: none;
      display: block;
      font-size: 14px;

      &:hover {
        color: #00D4FF;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 40px;
`;

const Button = styled.button`
  border: 2px solid #00D4FF;
  padding: 10px 25px;
  border-radius: 15px;
  background-color: ${(props) => (props.primary ? '#00D4FF' : 'transparent')};
  color: ${(props) => (props.primary ? '#00040F' : '#FFFFFF')};
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#00b3e6' : '#00D4FF')};
    color: #00040F;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={MutaEngine} alt="MutaEngine Logo" />
      </Logo>

      <Nav>
        <a href="#overview">Overview</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>

        <SolutionsDropdown>
          <a href="#solutions">Solutions <DropdownIcon /></a>
          <DropdownContent>
            <li><a href="#solution1">Solution 1</a></li>
            <li><a href="#solution2">Solution 2</a></li>
            <li><a href="#solution3">Solution 3</a></li>
          </DropdownContent>
        </SolutionsDropdown>
      </Nav>

      <ButtonGroup>
        <Button>Login</Button>
        <Button primary>Sign up</Button>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header;
