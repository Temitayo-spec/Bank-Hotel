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
      <Contact>
        <h3>+38 032 297 50 20</h3>
      </Contact>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const H2 = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--text-color-primary);
`;

const Nav = styled.nav`
  flex: 2;
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 10px;

      a {
        font-family: var(--font-primary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-normal);
        color: var(--text-color-primary);
        text-transform: uppercase;

        &:hover {
          color: var(--text-color-secondary);
        }
      }
    }
  }
`;

const Contact = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  h3 {
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    color: var(--text-color-primary);
  }
`;
