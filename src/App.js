import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Photography from './pages/Photography';
import Examples from './pages/Examples';
import Design from './pages/Design';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/quincreative" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/design" element={<Design />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
