import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.webp'; // Assume you have saved the generated logo here

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <MenuItem><StyledLink to="/">Home</StyledLink></MenuItem>
      <MenuItem><StyledLink to="/billing">Billing Details</StyledLink></MenuItem>
      <MenuItem><StyledLink to="/dashboard">Marketing Status Dashboard</StyledLink></MenuItem>
      <MenuItem><StyledLink to="/products">Products</StyledLink></MenuItem>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(to right, #e0f7fa, #ffffff);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`;

export const MenuItem = styled.div`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

export default Header;
