import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import App2 from '../../App2';
import App1 from '../../App1';
import {faEarth, faTable} from "@fortawesome/free-solid-svg-icons";

const SideBar = (props) => {
  const  gh=()=>{
    props.Display();
    
    
  }
  return (
    <div className="h-100">
      <div id="sidebar-menu">
        <ul className="list-unstyled" id="side-menu">
          <li className="menu-title mx-4 px-4">Menu</li>
          <li>
            <Link to="/Dashboard" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-users" />
              </div>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
              </div>
              <span>Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </div>
              <span>E-mail</span>
            </Link>
          </li>
          <li >
              
              <div  className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill" >
                <FontAwesomeIcon icon={faTable}
                onClick={gh} 
                              />
              </div>
              <span>Diagnostic</span>
            
           </div>
             
            
           
          </li>
        
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
