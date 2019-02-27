import styled from "styled-components"

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;

  h3 {
    font-size: 1.8rem;
    width: 100%;
    margin-bottom: 20px;
  }
`

export const MovieWrapper = styled.div`
  width: 25%;
  margin-right: 5%;
  margin-bottom: 20px;
  font-size: 1.5rem;

  img {
    width: 80%;
    height: 150px;
    margin: auto;
  }
`
