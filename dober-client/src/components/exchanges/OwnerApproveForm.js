import {useNavigate, useParams} from "react-router-dom"
import { useState } from "react"
function OwnerApproveForm() {
    const [errors, setErrors] = useState([])
    let {id} = useParams()
    let navigate = useNavigate()
    function handleApprove() {
        const configObj = {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({"testkey":"testvalue"})
    }
        fetch(`/exchange/app/${id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => console.log(data))
                navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }
    function handleDeny() {
        const configObj = {method: "DELETE"}
        fetch(`/exchange/${id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => console.log(data))
                navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }
    return(
        <div className="owner-approve-form">
                <button onClick={handleApprove}>APPROVE</button>
                <button onClick={handleDeny}>DENY</button>
                {errors?      errors.map((err) => (
                    <p style={{color: "red", fontWeight: "bold" }}
                    key={err}>{err}</p>)): null} 
        </div>
    )
}

export default OwnerApproveForm