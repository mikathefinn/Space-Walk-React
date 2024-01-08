import styled from 'styled-components'

export const SlideshowStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  .latest-image {
    margin-bottom: 4rem;
  }
  #rover-img {
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
  .slideshow-button {
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
  
  button {
    width: 50%;
    padding: 1rem 3rem;
    border-radius: 3rem;
    letter-spacing: 0.18rem;  
    box-shadow: 0.3rem 0.3rem 0.5rem #483d2f;
  }
  form {
    display: flex;
    gap: 2rem;
  }

  h2 {
    font-size: 2.8rem;
  }
  .images-intro {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    width: 80%;
  }
`
