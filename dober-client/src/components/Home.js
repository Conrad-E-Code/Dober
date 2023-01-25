import {Link} from "react-router-dom"

function Home(props) {
    function handleTest() {
        fetch("/equipment")
        .then(r => r.json())
        .then(data => console.log(data))
    }
    return(
        <div className="home">
            Hello from Home
            <br/>
            See My Equipment <button onClick={handleTest}>See it!</button>
            <br/>
             <Link to="/equipment/new">Post Equipment</Link>
            <br></br>
            <Link to="/exchanges">Exchanges</Link>

        </div>
    )
}

export default Home