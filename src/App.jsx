/**
 * App - Root component with React Router
 * All routes use the Layout component for consistent structure
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DemoFormPage = lazy(() => import('./pages/DemoFormPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage'));
const BudweiserPage = lazy(() => import('./pages/BudweiserPage'));
const BudweiserSelectPage = lazy(() => import('./pages/BudweiserSelectPage'));
const BudweiserSelect55Page = lazy(() => import('./pages/BudweiserSelect55Page'));
const BudweiserZeroPage = lazy(() => import('./pages/BudweiserZeroPage'));
const BudweiserCheladaPage = lazy(() => import('./pages/BudweiserCheladaPage'));
const ClydesdalePage = lazy(() => import('./pages/ClydesdalePage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Suspense fallback={<div style={{ flex: 1 }} />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="demo-form" element={<DemoFormPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="accessibility" element={<AccessibilityPage />} />
              <Route path="budweiser" element={<BudweiserPage />} />
              <Route path="budweiser-select" element={<BudweiserSelectPage />} />
              <Route path="budweiser-select-55" element={<BudweiserSelect55Page />} />
              <Route path="budweiser-zero" element={<BudweiserZeroPage />} />
              <Route path="budweiser-chelada" element={<BudweiserCheladaPage />} />
              <Route path="clydesdales" element={<ClydesdalePage />} />
              <Route path="history" element={<HistoryPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
