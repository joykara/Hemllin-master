import React, { useEffect, useState } from 'react';
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Media, About, Homepage, ContactUs, Blog, Career, Mission, OurGovernance, Services, Management, Education, AgricultureIndustry, ArtificialIntelligence, OurHistory, HowWeWork, Travel} from './pages';
import { SplashScreen } from './components';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <Router>
      <div className="App">
      {loading ? (
          <SplashScreen />
        ) : (
          <Routes>
            <Route path="/" exact element={<Homepage/>} />
              <Route path="/about-us" element={<About />} />
              <Route path="/about-us/blog" element={<Blog />} />
              <Route path="/about-us/our-purpose-mission-and-values" element={<Mission />} />
              <Route path="/about-us/our-governance" element={<OurGovernance />} />
              <Route path="/about-us/history-of-our-firm" element={<OurHistory />} />
              <Route path="/about-us/how-we-work" element={<HowWeWork />} />
              <Route path="/about-us/media" element={<Media />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/management" element={<Management />} />
              <Route path="/services/education" element={<Education />} />
              <Route path="/services/travel" element={<Travel />} />
              <Route path="/industries/agriculture" element={<AgricultureIndustry />} />
              <Route path="/featured-insights/ai" element={<ArtificialIntelligence />} />

          </Routes>
        )}
      </div>
    </Router>


  );
}

export default App;
