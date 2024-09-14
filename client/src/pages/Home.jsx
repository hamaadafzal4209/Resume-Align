import AccordionComponent from '../components/Home/Accordion/Accordion'
import FeaturesSection from '../components/Home/FeatureSection/FeatureSection'
import HeroSection from '../components/Home/Hero/Hero'
import HowItWorksSection from '../components/Home/HowItsWork/HowItsWork'
import NavComponent from '../components/Layout/Navbar'

const Home = () => {
  return (
    <div>
      <NavComponent/>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <AccordionComponent/>
    </div>
  )
}

export default Home
