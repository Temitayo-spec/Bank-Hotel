import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <H2>BankHotel</H2>
      </Logo>
      <Nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Rooms</a>
          </li>
          <li>
            <a href="#">Restaurant</a>
          </li>
          <li>
            <a href="#">Conference Hall</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </Nav>
      <Contact>+38 032 297 50 20</Contact>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const H2 = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    color: var(--color-primary);

    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const Contact = styled.div`
  font-family: var(--font-primary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
`;
