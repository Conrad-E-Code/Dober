import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Home({user}) {
    let navigate = useNavigate()
    function handleTest() {
        // console.log(user)
        navigate(`/${user.id}/equipment`)
        // fetch("/equipment")
        // .then(r => r.json())
        // .then(data => console.log(data))
    }
    return(
        <div className="home">
            <h1>Welcome {user.username}</h1>
            <br/>
            See My Equipment <button onClick={handleTest}>See it!</button>
            <br/>
             <Link to="/equipment/new"><button className="submit-signup">Post Equipment</button></Link>
            <br></br>
            <Link  to="/exchanges"><button className="submit-signup">View Exchanges</button></Link>
        </div>
    )
}
export default Home