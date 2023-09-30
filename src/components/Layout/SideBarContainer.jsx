import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const SideBarContainer =(props) => { 
  const gt=()=>props.Display();
  return (
    <div className="menu">
      <div className="navbar-brand-box my-3">
        <Link to="/" className="logo mx-4 px-4 text-primary">
          WISE BOARD
        </Link>
      </div>
      <div data-simplebar className="h-100">
        <SideBar Display={gt}/>
      </div>
    </div>
  )
}

export default SideBarContainer;
