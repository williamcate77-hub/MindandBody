import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { MobilityProvider } from './context/MobilityContext';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { MeditatePage } from './pages/MeditatePage';
import { MeditationDetailPage } from './pages/MeditationDetailPage';
import { MobilityPage } from './pages/MobilityPage';
import { ExerciseDetailPage } from './pages/ExerciseDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MobilityProvider>
          <div className="min-h-screen flex flex-col font-sans" style={{ background: '#0e1511', color: '#e8f0ea' }}>
            <Header />
            <main className="flex-1 pb-24">
              <Routes>
                <Route path="/" element={<Navigate to="/meditate" replace />} />
                <Route path="/meditate" element={<MeditatePage />} />
                <Route path="/meditate/:id" element={<MeditationDetailPage />} />
                <Route path="/mobility" element={<MobilityPage />} />
                <Route path="/mobility/:id" element={<ExerciseDetailPage />} />
              </Routes>
            </main>
            <BottomNav />
          </div>
        </MobilityProvider>
      </AppProvider>
    </BrowserRouter>
  );
}
