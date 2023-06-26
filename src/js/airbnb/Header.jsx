import Navbar from '/src/components/Navbar'

function Header() {

  return (
    <>
      <Navbar />
      <div className="header">
        <img className="header--logo" src="/logos/airbnb-logo.png" />
      </div>
    </>
  )
}

export default Header
