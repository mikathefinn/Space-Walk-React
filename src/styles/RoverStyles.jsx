import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Rover = styled.div`
  height: 100vh;
  color: white;
  background-image: url('public/images/mars-bg.jpg');
  background-size: cover;
  background-position: center center;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 80%;
    margin: 4rem auto;
    background-color: #3232327c;
  }

  h1 {
    padding: 8rem 0 6rem 0;
    font-size: 3.2rem;
  }
  main > p {
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
`
