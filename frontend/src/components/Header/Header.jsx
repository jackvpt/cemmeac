// CSS
import "./Header.scss"

import Navbar from "../Navbar/Navbar"
import Carousel from "../Carousel/Carousel"

const Header = () => {
  return (
    <header>
      <Carousel />
      <Navbar />
    </header>
  )
}

export default Header
