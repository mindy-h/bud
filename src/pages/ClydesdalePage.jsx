import ClydesdalHero from '../components/ClydesdalHero/ClydesdalHero';
import AmericanIcons from '../components/AmericanIcons/AmericanIcons';
import ClydesdalPromos from '../components/ClydesdalPromos/ClydesdalPromos';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import textureFull from '../assets/texturefull.webp';

export default function ClydesdalePage() {
  useDocumentTitle('Clydesdales');

  return (
    <div style={{ backgroundImage: `url(${textureFull})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ClydesdalHero />
      <AmericanIcons />
      <ClydesdalPromos />
    </div>
  );
}
