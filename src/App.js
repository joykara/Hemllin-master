import React, { useEffect, useState } from 'react';
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Media, About, Homepage, ContactUs, Blog, Career, Mission, OurGovernance, Services, Management, Education, AgricultureIndustry, ArtificialIntelligence, OurHistory, HowWeWork, Travel, CoachingAndTraining, OurTeam, AutomotiveIndustry, EducationIndustry, FinancialIndustry, HealthcareIndustry, LifeSciencesIndustry, PublicAndSocialIndustry, RealEstateIndustry, RetailIndustry, TechnologyIndustry, TravelLogisticsIndustry, EngineeringIndustry} from './pages';
import { SplashScreen } from './components';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after a delay
    }, 2000);
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
              <Route path="/about-us/our-team" element={<OurTeam />} />
              <Route path="/about-us/history-of-our-firm" element={<OurHistory />} />
              <Route path="/about-us/how-we-work" element={<HowWeWork />} />
              <Route path="/about-us/media" element={<Media />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/our-services" element={<Services />} />
              <Route path="/our-services/management" element={<Management />} />
              <Route path="/our-services/education" element={<Education />} />
              <Route path="/our-services/travel" element={<Travel />} />
              <Route path="/our-services/training-and-coaching" element={<CoachingAndTraining />} />
              <Route path="/industries/agriculture" element={<AgricultureIndustry />} />
              <Route path="/industries/automotive" element={<AutomotiveIndustry />} />
              <Route path="/industries/education" element={<EducationIndustry />} />
              <Route path="/industries/engineering-and-construction" element={<EngineeringIndustry />} />
              <Route path="/industries/financial-services" element={<FinancialIndustry />} />
              <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
              <Route path="/industries/life-sciences" element={<LifeSciencesIndustry />} />
              <Route path="/industries/public-and-social" element={<PublicAndSocialIndustry />} />
              <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
              <Route path="/industries/retail" element={<RetailIndustry />} />
              <Route path="/industries/technology" element={<TechnologyIndustry />} />
              <Route path="/industries/travel-logistics-and-infrastructure" element={<TravelLogisticsIndustry />} />
              <Route path="/featured-insights/ai" element={<ArtificialIntelligence />} />

          </Routes>
        )}
      </div>
    </Router>


  );
}

export default App;
