import { Routes, Route, Navigate } from "react-router-dom"

import Header from "../components/Header/Header"
import Home from "../pages/Home/Home"
import Footer from "../components/Footer/Footer"
import Error from "../components/Error/Error"
import Activities from "../pages/Activities/Activities"
import Access from "../pages/Access/Access"
import OpeningHours from "../pages/OpeningHours/OpeningHours"
import Contact from "../pages/Contact/Contact"
import Prices from "../pages/Prices/Prices"
import Blog from "../pages/Blog/Blog"

/**
 * Application router component using React Router v6.
 *
 * @category Router
 * @component
 * @returns {JSX.Element} The main Router component for the application.
 */
const Router = () => {
  return (
    <>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/access" element={<Access />} />
          <Route path="/openinghours" element={<OpeningHours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      {/* Footer displayed on all pages */}
      {/* <Footer /> */}
    </>
  )
}

export default Router
