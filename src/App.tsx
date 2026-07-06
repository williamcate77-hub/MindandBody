import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { MeditatePage } from './pages/MeditatePage';
import { MeditationDetailPage } from './pages/MeditationDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="min-h-screen flex flex-col font-sans" style={{ background: '#f2f7f4', color: '#152219' }}>
          <Header />
          <main className="flex-1 pb-10">
            <Routes>
              <Route path="/" element={<Navigate to="/meditate" replace />} />
              <Route path="/meditate" element={<MeditatePage />} />
              <Route path="/meditate/:id" element={<MeditationDetailPage />} />
              <Route path="*" element={<Navigate to="/meditate" replace />} />
            </Routes>
          </main>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
