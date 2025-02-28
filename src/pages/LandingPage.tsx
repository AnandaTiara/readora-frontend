import Header from '../components/fragments/Header'
import Section1 from '../components/fragments/Section1'
import MainPage from '../components/fragments/MainPage'
import Navbar from '../components/fragments/Navbar'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Section1/>
      <MainPage/>
    </div>
  )
}

export default LandingPage
