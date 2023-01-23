import {NavLink} from 'react-router-dom'

function NavBar({handleLogout, user}) {
    return(
        <nav className="nav">
            {user ? <button onClick={handleLogout}
             className='logout'>Logout</button> :null}
             {user ? <NavLink exact to="/">Home</NavLink> : console.log(user)}
             {user ? <NavLink exact to="/categories">Categories</NavLink> : console.log(user)}

        </nav>
    )
}

export default NavBar