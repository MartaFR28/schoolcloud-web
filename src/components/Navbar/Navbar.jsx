import { Link, NavLink } from "react-router-dom";


const Navbar =() => {

    return(
        <div>
         <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/login'>Login</NavLink>
                <NavLink className="navbar-brand" to='/student-portal'>Student Portal</NavLink>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <h5><strong>Menú</strong></h5>
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ">
                        <li className=" navbarList-link">                           
                            <NavLink className={({isActive}) => 
                            `nav-link ${isActive ? 'active': ''}`}
                            to= "/login">
                                Login
                            </NavLink>
                            <hr></hr>
                        </li>
                    </ul>
                </div> */}
               
                
            </div>
        </nav>

        </div>
       
    )
}
export default Navbar;
