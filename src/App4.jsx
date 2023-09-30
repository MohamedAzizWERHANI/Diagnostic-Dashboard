import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import App3 from "./App3";
import Form_User from "./pages/Form_User/Form_User";
function App4(){
    return (
        <>
        <Router>
            <Routes>
                <Route path="Dashboard" element={<App3></App3>}/>
                <Route path="/" element={<Form_User></Form_User>}/>
            </Routes>
        </Router>
        </>
    )
}
export default App4;