import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"

function App() {
  return (
    <>
      {/* Main router handling all application routes */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
