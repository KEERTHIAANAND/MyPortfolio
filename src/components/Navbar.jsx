import React from 'react';
import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

const NavbarContainer = styled.div`
  background-color: #000; /* true black */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 40px;
  height: 60px;
  font-family: 'Montserrat', sans-serif;
  border: none;
  border-bottom: 1px solid #000; /* for black line if you want */
`;


const NavLogo = styled(LinkR)`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.2rem;
  cursor: pointer;
`;


const NavItems = styled.ul`
    width:100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap:32px;
    padding:0 6px;
    list-style:none;
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight:500;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    &:hover{
      color:${({theme}) => theme.primary};
    }
`;

const Navbar = () => {
  return <NavbarContainer>
    <NavLogo to="/">Keerthi</NavLogo>

    <NavItems>
      <NavLink href="#About">About</NavLink>
      <NavLink href="#Skills">Skills</NavLink>
      <NavLink href="#Experience">Experience</NavLink>
      <NavLink href="#Projects">Projects</NavLink>
      <NavLink href="#Education">Education</NavLink>
    </NavItems>

  </NavbarContainer>;
};

export default Navbar;