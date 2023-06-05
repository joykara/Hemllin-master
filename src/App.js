import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Media, About, Homepage, ContactUs, Blog, Mission, Services, Management, Education, AgricultureIndustry} from './pages';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/blog" element={<Blog />} />
          <Route path="/about-us/our-purpose-mission-and-values" element={<Mission />} />
          <Route path="/about-us/media" element={<Media />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/management" element={<Management />} />
          <Route path="/services/education" element={<Education />} />
          <Route path="/industries/agriculture" element={<AgricultureIndustry />} />

      </Routes>
      </div>
    </Router>


  );
}

export default App;
