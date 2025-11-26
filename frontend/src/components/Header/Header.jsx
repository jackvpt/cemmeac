// CSS
import "./Header.scss"


import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header>
      <nav>
        <Navbar />
      </nav>
      <div className="title">CEMMEA</div>
    </header>
  )
}

export default Header
