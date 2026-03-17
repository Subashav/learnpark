import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import KnowUsPage from './pages/KnowUsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/know-us" element={<KnowUsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
