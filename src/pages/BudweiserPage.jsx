import ProductHero from '../components/ProductHero/ProductHero';
import Ingredients from '../components/Ingredients/Ingredients';
import BeerLocator from '../components/BeerLocator/BeerLocator';
import ExploreBeers from '../components/ExploreBeers/ExploreBeers';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import textureFull from '../assets/texturefull.webp';
import abCrest from '../assets/abcrest.svg';
import bud150 from '../assets/bud150.png';
import icon12oz from '../assets/12oz.svg';
import icon16oz from '../assets/16oz.svg';
import icon25oz from '../assets/25oz.svg';
import barley from '../assets/barley.png';
import rice from '../assets/rice.png';
import hops from '../assets/hops.png';
import water from '../assets/water.png';

const SIZES = [
  { label: '12 oz', icon: icon12oz },
  { label: '16 oz', icon: icon16oz },
  { label: '25 oz', icon: icon25oz },
];

const INGREDIENTS = [
  {
    name: 'Barley',
    description: 'Premium two-row and six-row barley, grown in the USA.',
    image: barley,
  },
  {
    name: 'Rice',
    description: 'Provides a clean, smooth taste and a crisp finish.',
    image: rice,
  },
  {
    name: 'Hops',
    description: 'Aromatic hops selected for flavor and balance.',
    image: hops,
  },
  {
    name: 'Water',
    description: 'Brewed with purified water that meets the highest standards.',
    image: water,
  },
];

export default function BudweiserPage() {
  useDocumentTitle('Budweiser');

  return (
    <>
      <ProductHero
        name="Budweiser"
        description="Budweiser is a 5.0% ABV American-style lager brewed by Anheuser-Busch since 1876. It's medium-bodied with a crisp, clean finish and brewed with American-grown barley and aromatic hops."
        canImage={bud150}
        texture={textureFull}
        watermark={abCrest}
        sizes={SIZES}
        sizesText="Available in bottles (12 OZ, 16 OZ) and cans (12 OZ, 16 OZ, 25 OZ)."
        ctaLabel="Find Near You"
        ctaHref="#"
      />
      <Ingredients items={INGREDIENTS} />
      <BeerLocator />
      <ExploreBeers exclude="budweiser" />
    </>
  );
}
