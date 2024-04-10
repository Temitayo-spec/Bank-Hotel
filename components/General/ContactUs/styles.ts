import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--text-color-primary, #fffcf6);
  width: 100%;

  &.restaurant {
    background: var(--bg-color);
  }
`;

export const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 5em 0 0;
  position: relative;

  hr {
    margin-top: 5em;
    color: var(--primary-color, #313f38);
    opacity: 0.23999999463558197;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  height: 20vh;
  margin-bottom: 10em;
  color: var(--text-color-tertiary, #1b3b36);

  &.restaurant {
    color: var(--text-color-primary, #fffcf6);
    display: flex;
    flex-direction: row-reverse;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 2fr 1fr;

    &.restaurant {
      flex-direction: column;
    }
  }
`;

export const ContactNumber = styled.div`
  font-family: var(--font-primary);
  font-size: 2.5rem;
  font-weight: var(--font-weight-normal);
  line-height: 3.125rem;

  &.restaurant {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    text-decoration: underline;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    font-size: 1.125rem;
    text-decoration: underline;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
    text-decoration: underline;
  }
`;

export const ContactAddress = styled.div`
  display: flex;
  align-items: flex-end;

  p {
    font-family: var(--font-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }

  &.restaurant {
    display: block;
    width: 100%;
    margin-left: 0;

    p {
      width: 45%;
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    p {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      font-size: 1.125rem;
    }
  }
`;

export const LargeText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;

  h1 {
    color: var(--text-color-tertiary, #1b3b36);
    font-family: var(--font-secondary);
    font-size: 15.625rem;
    font-weight: 400;
    line-height: 15.625rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    span {
      width: 0.5em;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &.restaurant {
    h1 {
      color: var(--text-color-primary, #fffcf6);
    }
  }

  h1:last-child {
    margin-left: auto;
    color: var(--text-color-secondary, #fcd043);
    z-index: 5;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 5.25rem;
      line-height: 5.25rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 9.375rem;
      line-height: 9.375rem;
    }
  }
`;

export const AbsoluteImages = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  & > div {
    position: absolute;
    top: 450px;
    right: 0px;

    & > div {
      position: relative;
      width: 20.9375rem;
      height: 31.47713rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .curve {
    position: absolute;
    object-fit: contain;
    top: 100px;
    margin-left: -60px;
  }

  @media (max-width: 767px) {
    & > div {
      top: 500px;

      & > div {
        width: 9.45619rem;
        height: 14.12338rem;
      }
    }

    .curve {
      object-fit: cover;
      top: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    & > div {
      top: 300px;
    }

    img {
      top: 30px;
    }
  }
`;

export const FindRoomCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 10em;
  h2 {
    color: var(--text-color-tertiary, #1b3b36);
    font-family: var(--font-primary);
    font-size: 1.625rem;
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }

  &.restaurant {
    h2 {
      color: var(--text-color-primary, #fffcf6);
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.125rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  button {
    width: 20%;
    height: 6rem;
    display: flex;
    cursor: pointer;

    img {
      width: 1em;
      height: 1em;
    }

    @media (min-width: 200px) and (max-width: 767px) {
      font-size: 0.75rem;
      height: 4rem;
      width: 40%;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 0.875rem;
      height: 6rem;
      width: 25%;
    }
  }
`;

export const CheckInBtn = styled.button`
  border: 1px solid #313f38;
  background: var(--text-color-primary, #fffcf6);
  backdrop-filter: blur(20px);
  color: var(--text-color-tertiary, #313f38);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  border-right: none;

  &.restaurant {
    color: var(--text-color-primary, #fffcf6);
    border: 1px solid var(--white, #fffcf61a);
    background: var(--white, #fffcf61a);
    backdrop-filter: blur(20px);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: none !important;
  }
`;

export const CheckOutBtn = styled.button`
  border: 1px solid #313f38;
  background: var(--white, #fffcf6);
  backdrop-filter: blur(20px);
  color: var(--text-color-tertiary, #313f38);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  border-left: none;
  border-right: none;

  &.restaurant {
    color: var(--text-color-primary, #fffcf6);
    border: 1px solid var(--white, #fffcf61a);
    background: var(--white, #fffcf61a);
    backdrop-filter: blur(20px);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: none !important;
  }
`;

export const BookRoom = styled.button`
  background: #313f38;
  color: var(--text-color-primary, #fffcf6);
  text-align: center;
  font-size: var(--font-size-lg);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  border: none;

  &.restaurant {
    background: var(--text-color-secondary);
    color: var(--text-color-tertiary, #313f38);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    background: var(--text-color-secondary);
  }
`;
