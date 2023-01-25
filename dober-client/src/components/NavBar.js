import {NavLink} from 'react-router-dom'

function NavBar({handleLogout, user}) {
    return(
        <nav className="nav">
            {user ? <button onClick={handleLogout}
             className='logout'>Logout</button> :null}
             {user ? <NavLink className="nav-link" exact to="/">Home</NavLink> : console.log(user)}
             {user ? <NavLink className="nav-link"exact to="/categories">Categories</NavLink> : console.log(user)}

        </nav>
    )
}

export default NavBar