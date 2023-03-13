import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Navbar />
      </Inner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
`;
