import styled from 'styled-components'

export const SlideshowStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  .latest-image {
    margin-bottom: 2rem;
  }
  .latest-image img {
    max-width: 50rem;
    max-height: 30rem;
    border-radius: 0.7rem;
  }
  .data {
    width: 100%;
  }
  .data p {
    margin: 0;
    padding: 0 0 0.8rem 2rem;
  }
  .data:last-child {
    margin-bottom: 3rem;
  }
  button {
    width: 80%;
    padding: 1rem 3rem;
    border-radius: 3rem;
    background-color: #ff8800b8;
    color: white;
    letter-spacing: 0.18rem;
    font-size: 1.7rem;
    border: none;
    box-shadow: 0.1rem 0.1rem 0.2rem #483d2f;
  }
`
