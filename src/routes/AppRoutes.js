import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CounselorPage from '../pages/CounselorPage';
import FacilityPage from '../pages/FacilityPage';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/counselor" element={<CounselorPage />} />
                <Route path="/facility" element={<FacilityPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
