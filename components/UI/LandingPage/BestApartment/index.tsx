import Image from 'next/image';
import line from '@/public/images/best_apartment/line.png';
import Reveal from '@/components/General/Reveal';
import { Inner, Wrapper } from './styles';

const BestApartment = () => {
  return (
    <Wrapper>
      <Inner>
        <Reveal>
          <h1>
            Best <br /> Apartments
          </h1>
        </Reveal>
        <Reveal textDelay={0.5} slideDelay={0.5}>
          <p>
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </Reveal>
        <Image src={line} alt="line" />
      </Inner>
    </Wrapper>
  );
};

export default BestApartment;

