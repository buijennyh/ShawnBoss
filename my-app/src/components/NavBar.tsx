import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 

const NavBar:React.FC = () => {
    const navigate = useNavigate();
   return (
    <header className="p-3 bg-dark text-white">
        <div className="container">
            <div className="d-flex flex-wrap alight-items-center justify-content-center justify-content-lg-start">
            <div
            onClick={() => {
                navigate("/"); 
            }}
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <h4>SHAWNBOSS</h4>
            </div>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <Link to="/" className="nav-link px-2 text-white">
                        Home
                    </Link>
                </li>
                
                <li>
                    <Link to="/inspiration" className="nav-link px-2 text-white">
                        Inspiration
                    </Link>
                </li>

                <li>
                    <Link to="/music" className="nav-link px-2 text-white">
                        Music
                    </Link>
                </li>
                <li>
                    <Link to="/merch" className="nav-link px-2 text-white">
                        Merch
                    </Link>
                </li>
            </ul>
           </div>
        </div>
    </header>
  );
};

export default NavBar; 