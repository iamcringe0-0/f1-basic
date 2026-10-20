import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ArticleBasics } from './pages/ArticleBasics';
import { ArticleRaceWeekend } from './pages/ArticleRaceWeekend';
import { ArticleTeamsDrivers } from './pages/ArticleTeamsDrivers';
import { NotFoundPage } from './pages/NotFoundPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/f1-basics" element={<ArticleBasics />} />
        <Route path="/understanding-f1-race-weekends" element={<ArticleRaceWeekend />} />
        <Route path="/f1-teams-and-drivers" element={<ArticleTeamsDrivers />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
