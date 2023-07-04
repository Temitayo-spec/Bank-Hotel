import styled from 'styled-components';

const OurFacilities = () => {
  return (
    <Wrapper>
      <Inner>Our Facilities</Inner>
    </Wrapper>
  );
};

export default OurFacilities;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--text-color-primary, #fffcf6);
  padding: 10em 0;
  border-bottom: 1px solid #313f38;
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;
