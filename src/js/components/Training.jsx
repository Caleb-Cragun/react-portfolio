import Navbar from "./Navbar"
import Header from '../training/Header'
import Hero from '../training/Hero'
import Card from '../training/Card'
import cardData from '../training/cardData'
import '/src/css/training.css'

function Training() {
  const cardElements = cardData.map(card => {
    return <Card
      key={card.id}
      {...card}
    />
  })
  return (
    <div className="airbnb-container">
      <Navbar />
      <Header />
      <Hero />
      <section>
        {cardElements}
      </section>
    </div>
  )
}

export default Training