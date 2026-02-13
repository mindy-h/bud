import Hero from '../components/Hero/Hero';
import CampaignCards from '../components/CampaignCards/CampaignCards';
import OurBeers from '../components/OurBeers/OurBeers';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle('Home');

  return (
    <>
      <Hero />
      <CampaignCards />
      <OurBeers />
    </>
  );
}
