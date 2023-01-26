import {NavLink} from 'react-router-dom'

function NavBar({handleLogout, user}) {
    return(
        <nav className="nav">
            {user ? <button onClick={handleLogout}
             className='logout'>Logout</button> :null}
             {<NavLink className="nav-link" exact to="/">Home</NavLink>}
             {<NavLink className="nav-link"exact to="/categories">Categories</NavLink>}

        </nav>
    )
}

export default NavBar