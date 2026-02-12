import Hero from '../components/Hero/Hero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle('Home');

  return (
    <>
      <Hero />
    </>
  );
}
