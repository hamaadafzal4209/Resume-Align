import AccordionComponent from '../components/Home/Accordion/Accordion'
import ContactSection from '../components/Home/Contact/Contact'
import FeaturesSection from '../components/Home/FeatureSection/FeatureSection'
import HeroSection from '../components/Home/Hero/Hero'
import HowItWorksSection from '../components/Home/HowItsWork/HowItsWork'
import Footer from '../components/Layout/Footer'
import NavComponent from '../components/Layout/Navbar'

const Home = () => {
  return (
    <div>
      <NavComponent/>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <AccordionComponent/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home
