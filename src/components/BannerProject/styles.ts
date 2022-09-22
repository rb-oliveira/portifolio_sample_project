import styled from 'styled-components';

interface BannerContainerProps {
  imgUrl: string;
}

export const Container = styled.div<BannerContainerProps>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;

  section {
    z-index: 2;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 2rem;
      font-weight: 300;
    }
  }

  > div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.7;
    transition: 0.5s;
    left: 0;
    bottom: 0;
  }

  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 20rem;

    section {
      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
