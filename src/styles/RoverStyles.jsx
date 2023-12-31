import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RoverC = styled.div`
  min-height: 100vh;
  color: white;
  background-image: url('public/images/mars-bg.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding-bottom: 2rem;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8rem;
  background-color: #3232327c;
  border-radius: 0.5rem;

  h1 {
    padding: 6rem 0 6rem 0;
    font-size: 3.2rem;
  }
  .intro {
    font-size: 2rem;
    width: 80%;
    margin-bottom: 8rem;
  }

  .rovers {
    display: flex;
    flex-direction: row;
    width: 90%;
  }
  .rovers > div {
    flex: 1;
  }
  .first-rover,
  .second-rover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    gap: 2rem;
  }

  .curiosity,
  .perseverance {
    width: 70%;
    border-radius: 0.5rem;
  }
  .text-img {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .para-one {
    text-indent: 1rem;
  }
  .para-one:first-of-type {
    margin-bottom: 2rem;
  }
  .para {
    width: 80%;
    margin-bottom: 2rem;
    text-indent: 1rem;
  }
  .para:last-of-type {
    margin-bottom: 6rem;
  }
  .para-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 50%;
  }
  .rover-art {
    max-width: 40%;
    border-radius: 1rem;
    padding: 0 3rem;
  }

  .persecuri-header {
    font-size: 2.8rem;
    margin: 6rem 0;
  }
  .perse-map {
    margin-bottom: 3rem;
  }
  .location {
    width: 80%;
    margin-bottom: 4rem;
  }
  .location > span {
    font-weight: bold;
    color: #48aed0;
  }
`
export const WeatherDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
margin-top: 2rem;

  iframe {
    width: 100rem;
    height: 57rem;
    border-radius: 0.5rem;
  }
`

export const Anchor = styled(Link)`
  font-size: inherit;
  font-size: medium;
  color: #07ebf7;
  position: relative;
`
