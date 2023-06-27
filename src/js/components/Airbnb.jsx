import Navbar from "./Navbar"
import Header from '../airbnb/Header'
import Hero from '../airbnb/Hero'
import Card from '../airbnb/Card'
import '/src/css/airbnb.css'

function Airbnb() {
  return (
    <div className="airbnb-container">
      <Navbar />
      <Header />
      <Hero />
      <Card />
    </div>
  )
}

export default Airbnb