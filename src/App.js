import React from 'react';
import './App.css';
import { Footer, Navbar } from './Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Gallery, Contact, Project } from './Pages';

const App = () => (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </div>
);

export default App;