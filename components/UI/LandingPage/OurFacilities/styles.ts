import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--text-color-primary, #fffcf6);
  padding: 5em 0;
  border-bottom: 1px solid #313f38;
`;

export const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--text-color-tertiary, #1b3b36);
  gap: 2em;

  .image_ctn {
    position: relative;
    overflow: hidden;
    width: 20.9375rem;
    height: 13.51719rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    img:nth-child(3) {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    img:nth-child(3) {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const P = styled.p`
  font-size: 1.125rem;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-normal);
  text-transform: uppercase;
  padding-right: 8.5em;

  @media (min-width: 200px) and (max-width: 767px) {
    margin-left: auto;
    padding-right: 0;
    text-align: right;
    width: 60%;
    font-size: 0.875rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-right: 0;
    width: 60%;
    text-align: left;
  }
`;

export const CustomH1Ctn = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5em;
    img {
      width: 4.41944rem;
      height: 4.41944rem;
    }
  }

  h1 {
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 6.5625rem;
    text-transform: uppercase;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 4rem;
      line-height: 3.125rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 6.25rem;
      line-height: 5rem;
    }
  }
`;

export const SectionOne = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  color: var(--text-color-tertiary, #1b3b36);
  margin: 5em 0;

  img {
    width: 80%;
    object-fit: contain;
  }

  p {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    line-height: 1.75rem;
    display: flex;
    align-items: flex-end;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    place-items: center;
    gap: 1em;

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      margin-top: -6em;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

export const ImageCtn = styled.div`
  width: 100%;
  position: relative;

  & > img {
    position: absolute;
    right: -100px;
    z-index: 1;
    top: -100px;
  }

  & > div {
    position: relative;
    overflow: hidden;
    width: 20.9375rem;
    height: 13.51719rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;

    img:last-child {
      position: static;
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export const SectionTwo = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4em;
  margin-top: 15em;

  @media (min-width: 200px) and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 10em;
    height: 60vh;
  }
`;

export const LHS = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const ButtonCtn = styled.div`
  flex: 1.5;

  img {
    object-fit: contain;
    margin-top: 65%;
    transform: rotate(90deg);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    flex: 1;

    img {
      margin-top: 40%;
      width: 4em;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 6.5625rem;
      height: 6.5625rem;
    }
  }
`;

export const RoomDetails = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0;
  @media (min-width: 200px) and (max-width: 767px) {
    flex: 1;
  }
`;

export const Numbering = styled.h2`
  color: var(--text-color-tertiary, #1b3b36);
  font-size: 3.125rem;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-normal);
  line-height: 3.125rem;
  letter-spacing: 0.09375rem;
  text-transform: capitalize;

  @media (min-width: 200px) and (max-width: 767px) {
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0;
  gap: 1em;
  color: var(--text-color-tertiary, #1b3b36);
  h2 {
    font-size: 3.125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 3.125rem;
    letter-spacing: 0.09375rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    line-height: 1.75rem;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    gap: 0.5em;
    h2 {
      font-size: 2rem;
      line-height: 2.25rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 2.25rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

export const RHS = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SectionThree = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    color: #313f38;
    opacity: 0.24;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4em;
  padding: 3em 0;
  color: var(--text-color-tertiary, #1b3b36);
  position: relative;
  cursor: pointer;

  .image_ctn {
    position: relative;
    overflow: hidden;
  }

  .text_ctn {
    display: flex;
    align-items: center;
  }

  h2 {
    flex: 2;
    font-size: 3.125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 3.125rem;
    letter-spacing: 0.09375rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    span {
      margin-right: 2em;
    }
  }

  .arrow {
    transition: all 0.6s ease-in-out;
    margin-left: auto;
  }

  &:hover {
    .arrow {
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 1em 0;
    gap: 2em;

    .text_ctn {
      & > div {
        position: static !important;
        width: fit-content;
        height: fit-content;
        overflow: auto;
      }
    }

    h2:first-of-type {
      font-size: 1.75rem;

      span {
        position: absolute;
        top: 20px;
        right: -60px;
      }
    }

    .arrow {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 2.25rem;

      span {
        margin-right: 0.5em;
      }
    }
  }
`;
