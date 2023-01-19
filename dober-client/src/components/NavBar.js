import {NavLink} from 'react-router-dom'

function NavBar({handleLogout, user}) {
    return(
        <nav className="nav">
            Hello From Nav
            {user ? <button onClick={handleLogout}
             className='logout'>Logout</button> :null}
        </nav>
    )
}

export default NavBar