import styled from 'styled-components'

export const WelcomeStyles = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding-top: 4rem;
  font-size: 3.6rem;
  letter-spacing: 0.7rem;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  filter: blur(${({ isVisible }) => (isVisible ? '0' : '5px')});
  transition: opacity 2s ease, filter 4.5s ease;

  display: flex;
  justify-content:center;
  align-items: center;

  h2 {
    padding: 1rem 0 0 8rem;
  }
  img {
    width: 100%;
    padding-left: 15rem;
  }
  .wrap {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
  }
  .wrap:first-child {
    max-width: 50%;
  }
  `