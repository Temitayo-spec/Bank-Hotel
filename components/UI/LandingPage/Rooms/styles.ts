import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--text-color-primary, #fffcf6);
`;

export const Inner = styled.div`
  padding: 10em 0;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  border-bottom: 1px solid #d6e1dc;

  @media (max-width: 768px) {
    padding: 7.4rem 0 4.37rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  color: var(--text-color-tertiary, #1b3b36);
  margin-bottom: 6em;
  h1 {
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 6.5625rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    h1 {
      font-size: 3rem;
      line-height: 3.75rem;
    }

    .small_text {
      font-size: 0.75rem;
      margin-top: 1.5em;
      max-width: 10.375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 5.625rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Year = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-color-tertiary, #1b3b36);
  border-radius: 99px;
  gap: 1.5em;
  padding: 0 1em;

  span {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: 1.375rem;
    text-transform: capitalize;
    color: var(--text-color-tertiary, #1b3b36);
  }

  @media (min-width: 200px) and (max-width: 1024px) {
    display: none;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  height: auto;

  @media (min-width: 200px) and (max-width: 767px) {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const LHS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    & > div {
      display: none;
    }

    img:last-child {
      width: 6.5625rem;
      margin-top: -2em;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    & > div {
      display: none;
    }

    img:last-child {
      width: 6.5625rem;
      height: 6.5625rem;
    }
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14.69rem;

  @media (min-width: 200px) and (max-width: 767px) {
    flex-direction: row;
  }
`;

export const MidTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6.75em;
  align-items: flex-start;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5em;
    align-items: flex-start;
  }

  h2 {
    color: var(--text-color-tertiary, #1b3b36);
    font-size: 2.25rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    letter-spacing: 0.0675rem;
    text-transform: capitalize;
  }

  p {
    color: var(--text-color-tertiary, #1b3b36);
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;

    & > div {
      flex-direction: column;
    }

    h2 {
      font-size: 1.875rem;
    }

    p {
      font-size: 0.8125rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

export const RoomOf = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  font-size: 1.375rem;
  font-family: var(--font-primary);
  font-weight: 400;
  line-height: 1.75rem;

  span:first-child {
    color: var(--text-color-tertiary, #1b3b36);
    margin-right: 0.5em;
  }

  span:last-child {
    opacity: 0.5;
    margin-left: 0.5em;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    margin-left: auto;
    font-size: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const RHS = styled.div`
  position: relative;

  & > div {
    position: relative;
    overflow: hidden;
    width: 35.75rem;
    height: 47.22588rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    & > div {
      width: 100%;
      height: 26.48294rem;
    }
  }
`;

export const BookRoomBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  background: transparent;
  border: none;
  outline: none;

  span {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    position: absolute;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    bottom: 1em;
    right: 1em;
    width: 7rem;
    height: 7rem;
    img {
      width: 100%;
      height: 100%;
    }

    span {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    bottom: 1em;
    img {
      width: 70%;
    }

    span {
      font-size: 1rem;
    }
  }
`;
