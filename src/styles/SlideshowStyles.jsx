import styled from 'styled-components'

export const SlideshowStyles = styled.section`
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
    padding: 0.9rem 2rem;
    background-color: blue;
  }
`
