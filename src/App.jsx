import './App.css'
// Import scss
import "./assets/scss/app.scss"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import SideBarContainer from "./components/Layout/SideBarContainer"
import Diagnostic from "./pages/Diagnostic";
function App() {
  library.add(fas)
  

  return (
    <>
      <Router>
        <Header />
        <SideBarContainer />
        <div className="main-content">
          <div className="page-content">
            <Routes>
            <Route path="Diagnostic" element={<Diagnostic />} />
              <Route path="Dashboard" element={<Dashboard/>}/>
              
        
            </Routes>
                  </div>
                  </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
