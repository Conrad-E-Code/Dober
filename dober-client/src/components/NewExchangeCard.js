import { useNavigate, useParams } from "react-router-dom"
import {useState} from "react"

function NewExchangeCard({user}) {
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
    .then(r => r.json())
    .then(data => {console.log(data)
    navigate("/")})
}



    return (
        <div className="new-exch-card">
            BOOK IT!
            {`${id}`}
            <form onSubmit={(e) => handleInitiateExchange(e)}>
                {/* <label> SECRET HIDDEN BACKEND FORM INPUT? HOW DOES THAT WORK???
                    <br />
                    <input className="hidden-input" value={user.id} name="user_id"></input>
                    <br />
                    <input className="hidden-input" value={id} name="equipment_id"></input>
                </label> */}
                <button type="submit">Send Request </button>
            </form>
        </div>
    )
}

export default NewExchangeCard