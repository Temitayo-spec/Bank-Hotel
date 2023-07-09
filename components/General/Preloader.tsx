import styled from 'styled-components';
import curve from '@/public/images/restaurant/curve.png';

const Preloader = () => {
  return (
    <PreloaderStyled>
      <div className="preloader">
        <div className="preloader__inner">
          <div className="preloader__logo">Bank Hotel</div>
          <div className="preloader__progress"></div>
        </div>
      </div>
    </PreloaderStyled>
  );
};

export default Preloader;

const PreloaderStyled = styled.div`
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${curve.src}), var(--bg-color);
    z-index: 1000;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      background-size: 100% 100%;
	  background-repeat: no-repeat;
	  background-position: center;
    }
    .preloader__inner {
      position: relative;
      .preloader__logo {
        font-size: 3.5rem;
        font-weight: 700;
        font-family: var(--font-secondary);
        color: var(--text-color-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        transition: 0.3s;

        @media (max-width: 768px) {
          font-size: 2rem;
          width: 100%;
        }
      }

      .preloader__progress {
        width: 4rem;
        height: 4rem;
        background: var(--text-color-secondary);
        position: absolute;
        top: 100%;
        left: 0;
        transition: 0.3s;
        animation: fillScreen 4s linear forwards;
        transform-origin: left;
        @keyframes fillScreen {
          0% {
            width: 0;
            height: 1px;
            border-radius: 50%;
            background: var(--text-color-secondary);
          }
          100% {
            width: 100%;
            height: 1px;
            border-radius: 0%;
          }
        }
      }
    }
  }
`;
