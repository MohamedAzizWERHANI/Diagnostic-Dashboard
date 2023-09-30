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
import Form_User from "./pages/Form_User/Form_User";
import { useState } from 'react';
function App3(){
    library.add(fas)
    const [dash_diag,setdash_diag]=useState("dashboard");
    
    const display=()=>{
setdash_diag("diagnostic");
    }
    const display1=()=>{
setdash_diag("dashboard");
    }
    return(
        <>
          <Header Display1={display1}/>
          <SideBarContainer Display={display}/>
          <div className="main-content">
            <div className="page-content">
              {dash_diag==="dashboard"&&<Dashboard></Dashboard>}
              {dash_diag==="diagnostic"&&<Diagnostic></Diagnostic>}
            </div>
          </div>
          <Footer />
          </>
    

    )
}
export default App3;