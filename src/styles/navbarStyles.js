import styled from "styled-components"
import { Flex } from "./generalStyles"

export const NavbarWrapper = styled(Flex)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
`

export const AppIcon = styled.div`
  width: 20%;
  font-size: 3rem;
  padding: 20px;
  color: red;

  i {
    margin-right: 5px;
    display: inline-block;
  }
`

export const Links = styled(Flex)`
  width: 80%;
  font-size: 2rem;
`

export const LinksGroup = styled(Flex)`
  width: 55%;

  a {
    color: white;
  }
`

export const LoginGroup = styled(LinksGroup)`
  width: 15%;
  padding-left: 1%;
  border-left: 1px solid red;
`
