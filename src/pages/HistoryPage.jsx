import { useState, useCallback } from 'react';
import HistoryHero from '../components/HistoryHero/HistoryHero';
import EraNav from '../components/EraNav/EraNav';
import HistoryTimeline from '../components/HistoryTimeline/HistoryTimeline';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import textureFull from '../assets/texturefull.webp';

export default function HistoryPage() {
  useDocumentTitle('History');
  const [activeEra, setActiveEra] = useState('era-1860');

  const handleActiveEra = useCallback((id) => {
    setActiveEra(id);
  }, []);

  return (
    <div style={{ backgroundImage: `url(${textureFull})`, backgroundSize: '1440px auto', backgroundRepeat: 'repeat' }}>
      <ScrollProgress />
      <HistoryHero />
      <EraNav activeEra={activeEra} />
      <HistoryTimeline onActiveEra={handleActiveEra} />
    </div>
  );
}
