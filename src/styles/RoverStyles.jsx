import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Rovers = styled.div`
  height: 100vh;
  color: white;
  background-image: url('public/images/mars-bg.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding-bottom: 3rem;
`
export const RoverC = styled.div`
  min-height: 100vh;
  color: white;
  background-image: url('public/images/mars-bg.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding-bottom: 3rem;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 80%;
  margin: 0 auto;
  background-color: #3232327c;
  border-radius: 0.5rem;

  h1 {
    padding: 8rem 0 6rem 0;
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
    flex-direction: row;
    flex-wrap: nowrap;
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
  .curiart {
    width: 50%;
    padding: 0 1rem;
    border-radius: 1rem;
  }
  iframe {
    max-height: 620px;
    margin: auto;
    width: 90%;
    height: 80%;
    border-radius: 0.5rem;
  }
`
export const Anchor = styled(Link)`
  
  font-size: inherit;
  font-size: medium;
  color: #07ebf7;
  position: relative;
`
