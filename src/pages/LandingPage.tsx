import Header from '../fragments/Header'
import Section1 from '../fragments/Section1'
import Navbar from '../components/elements/Navbar'
import Section2 from '../fragments/Section2'
import Footer from '../fragments/Footer'
import MainLanding from '../fragments/MainLanding'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Section1/>
      <MainLanding/>
      <Section2/>
      <Footer/>
    </div>
  )
}

export default LandingPage
