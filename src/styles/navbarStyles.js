import styled from "styled-components"
import { Flex } from "./generalStyles"

export const NavbarWrapper = styled(Flex)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #3f0122;
`

export const AppIcon = styled.div`
  width: 20%;
  font-size: 3rem;
  padding: 20px;
  /* color: 696dd3; */
  /* color: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%); */
  span {
    background: linear-gradient(to bottom, #33ccff 0%, #3f0122 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  i {
    margin-right: 5px;
    display: inline-block;
    color: #33ccff;
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
  padding-right: 3%;
  border-left: 1px solid #3f0122;
`
