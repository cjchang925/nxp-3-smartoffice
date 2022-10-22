import Home from './Home';
import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import OriginalOffice from './OriginalOffice';
import SelectQuakeLevel from './SelectQuakeLevel';
import LevelOne from './LevelOne';
import LevelFour from './LevelFour';
import LevelSix from './LevelSix';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/original_office" element={<OriginalOffice />} />
                    <Route path="/select_level" element={<SelectQuakeLevel />} />
                    <Route path="/level_one" element={<LevelOne />} />
                    <Route path="/level_four" element={<LevelFour />} />
                    <Route path="/level_six" element={<LevelSix />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
