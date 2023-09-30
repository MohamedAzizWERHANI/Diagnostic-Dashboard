import './App.css'
// Import scss
import "./assets/scss/app.scss"
import Diagnostic from "./pages/Diagnostic"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import SideBarContainer from "./components/Layout/SideBarContainer"

function App2(){
    library.add(fas);
 
    return(
        <>
         <Header />
        <SideBarContainer />
     <div className="main-content">
        <div className="page-content">
        <Diagnostic />
        </div>
     </div>
     <Footer />
       
        </>
    )
}
export default App2;