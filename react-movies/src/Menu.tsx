import { NavLink } from "react-router-dom";

export default function Menu()
{
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React TVshows</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genres">
                                Genres
                            </NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/shows/filter">
                                Filter Shows
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/actors">
                                Actors
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Showplatforms">
                                Show Platforms
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shows/create">
                                Create a Show
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )
}