import './App.css'
import Footer from './Components/Footer/Footer'
import LatestWork from './Components/LatestWorks/LatestWork'
import LetsConnect from './Components/LetsConnect/LetsConnect'
import Navbar from './Components/Navbar/Navbar'
import ReviewSlider from './Components/Slider/ReviewSlider'

function App() {

  return (

    <>
      <Navbar />
      <LatestWork />
      <ReviewSlider />
      <LetsConnect />
      <Footer />
    </>

  )
}

export default App
