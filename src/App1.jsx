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


function App1(){
    library.add(fas);
    return (
        <>
        <Header />
        <SideBarContainer />
     <div className="main-content">
        <div className="page-content">
        <Dashboard/>
        </div>
     </div>
     <Footer />
        </>
    );
}
export default App1;