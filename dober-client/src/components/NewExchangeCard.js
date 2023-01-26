import { useNavigate, useParams } from "react-router-dom"
import {useState} from "react"

function NewExchangeCard({user}) {
    const [errors, setErrors] = useState([])
    let navigate = useNavigate()
    let {id} = useParams()
function handleInitiateExchange(e) {
    e.preventDefault()
    const postObj = {
        "user_id": user.id,
        "equipment_id": id
    }
    const configObj = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(postObj)
    }
    fetch("/exchange/new", configObj)
    .then(r => {
        if (r.ok) {
            r.json().then((data) => {console.log(data)
            navigate("/")})
        } else {
            r.json().then((err) => setErrors(err["errors"]))
        }
    })
}


    return (
        <div className="new-exch-card">
            Request To Borrow Equipment
            {`${id}`}
            <form onSubmit={(e) => handleInitiateExchange(e)}>
                {/* <label> SECRET HIDDEN BACKEND FORM INPUT? HOW DOES THAT WORK???
                    <br />
                    <input className="hidden-input" value={user.id} name="user_id"></input>
                    <br />
                    <input className="hidden-input" value={id} name="equipment_id"></input>
                </label> */}
                <p className="hidden-input"> SECRET BACKEND STUFF:</p>
                <a href="https://www.linkedin.com/in/conrad-etherington/" className="hidden-input">Don't Click Here!</a>
                <p className="hidden-input">USER: {user.id}</p>
                <button className="" type="submit">Send Request </button>
            </form>
            {errors?      errors.map((err) => (
                <p style={{color: "red", fontWeight: "bold" }}
                key={err}>{err}</p>
            )): null} 
        </div>
    )
}

export default NewExchangeCard