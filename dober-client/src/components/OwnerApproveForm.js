import {useNavigate, useParams} from "react-router-dom"
 
function OwnerApproveForm() {
    let {id} = useParams()
    let navigate = useNavigate()
    function handleApprove() {
        const configObj = {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({"testkey":"testvalue"})
    }
        fetch(`/exchange/app/${id}`, configObj)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            navigate("/")
        })
    }
    function handleDeny() {
        const configObj = {method: "DELETE"}
        fetch(`/exchange/${id}`, configObj)
    }
    return(
        <div className="owner-approve-form">
                <button onClick={handleApprove}>APPROVE</button>
                <button onClick={handleDeny}>DENY</button>
        </div>
    )
}

export default OwnerApproveForm