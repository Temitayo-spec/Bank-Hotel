import styled from 'styled-components';
import Navbar from './Navbar';

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
`;