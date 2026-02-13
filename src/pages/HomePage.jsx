import Hero from '../components/Hero/Hero';
import CampaignCards from '../components/CampaignCards/CampaignCards';
import OurBeers from '../components/OurBeers/OurBeers';
import BeerLocator from '../components/BeerLocator/BeerLocator';
import BrewCarousel from '../components/BrewCarousel/BrewCarousel';
import PromoModules from '../components/PromoModules/PromoModules';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle('Home');

  return (
    <>
      <Hero />
      <CampaignCards />
      <OurBeers />
      <BeerLocator />
      <BrewCarousel />
      <PromoModules />
    </>
  );
}
