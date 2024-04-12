import React from "react";

import HeroSection16 from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      {/* <LandingNav /> */}
      <HeroSection16 />
      <AboutUs />
      <Testimonial />
      <ContactUs />
    </div>
  );
}

export default App;
