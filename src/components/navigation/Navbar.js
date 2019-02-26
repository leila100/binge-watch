import React from "react"
import { NavLink } from "react-router-dom"

import {
  NavbarWrapper,
  AppIcon,
  Links,
  LinksGroup,
  LoginGroup
} from "../../styles/navbarStyles"

const Navbar = props => {
  return (
    <NavbarWrapper>
      <AppIcon>
        <i class="fas fa-film" /> <span>BingeWatch</span>
      </AppIcon>
      <Links>
        <LinksGroup>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Movies</NavLink>
          <NavLink to="/">TV Shows</NavLink>
          <NavLink to="/">Members</NavLink>
          <NavLink to="/">Search</NavLink>
        </LinksGroup>
        <LoginGroup>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/">Sign Up</NavLink>
        </LoginGroup>
      </Links>
    </NavbarWrapper>
  )
}

export default Navbar
