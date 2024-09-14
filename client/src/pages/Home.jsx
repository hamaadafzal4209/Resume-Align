import FeaturesSection from '../components/FeatureSection'
import HeroSection from '../components/Hero/Hero'
import NavComponent from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <NavComponent/>
      <HeroSection/>
      <FeaturesSection/>
    </div>
  )
}

export default Home
