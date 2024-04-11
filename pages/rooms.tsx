import PageTransition from '@/components/General/PageTransition';
import { Header, RoomBanner, SectionThree, SectionTwo } from '@/components/UI';

const Rooms = () => {
  return (
    <div>
      <Header />
      <RoomBanner />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default PageTransition(Rooms);
