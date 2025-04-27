import CTA from "./Components/CTA"
import FAQs from "./Components/FAQs"
import FeatureSection from "./Components/FeatureSection"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Marquee from "./Components/Marquee"
import Testimonials from "./Components/Testimonials"


function App() {
  

  return (
    <div className="h-screen w-screen overflow-x-hidden font-['Neue_Montreal'] bg-white">
      <Hero/>
      <Marquee/>
      <FeatureSection/>
      <Testimonials/>
      <FAQs/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
