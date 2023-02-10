import { useState } from "react"
import { useNavigate } from "react-router-dom"
function OwnerExchange({exchange}) {
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const [isApproved, setIsApproved] = useState(false)
    function handleApprove(e, isApp, setIsApp) {
        const configObj = {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({"testkey":"testvalue"})
    }
        fetch(`/exchange/app/${exchange.id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => {setIsApp(data.owner_approved)})
                // navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }
    function handleDeny() {
        const configObj = {method: "DELETE"}
        fetch(`/exchange/${exchange.id}`, configObj)
        .then(r => {
            if (r.ok) {
                window.location.reload()
                // r.json().then((data) => console.log(data))
                // navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }
    function handleShowExc() {
        navigate(`/exchanges/${exchange.id}`)

    }
    function checkCompleted() {
        return exchange.owner_approved && (exchange.ended_at !== null)
    }
function checkStarted() {
    return exchange.started_at !== null
}

    
    return(
            <div  className="owner-exchange-card">
                <p className="exchange-detail">
                    Exchange Id: {`${exchange.id}`}
                    <br />
                    Equipment Id: {exchange.equipment_id}
                </p>

                <p className="exchange-detail"> Status: {checkCompleted() ? "COMPLETE" 
                : exchange.owner_approved && !exchange.started_at?   "Pending Your Approval": checkStarted() ? "STARTED": exchange.owner_approved ? "APPROVED" : "Pending Your Approval" } 

                {/* {(exchange.owner_approved === null) && (exchange.started_at === null) ?
                <button className="exchange-button" onClick={handleApprove}>APPROVE</button>
                 : console.log(exchange.owner_approved)} */}

                {!isApproved && !exchange.started_at ?
                <button className="exchange-button" onClick={(e) => handleApprove(e, isApproved, setIsApproved)}>APPROVE</button>
                 : console.log(exchange.owner_approved)}


                {(exchange.started_at === null) ? <button className="exchange-button"onClick={handleDeny}>DENY/DELETE</button>
                : console.log(exchange.started_at) }
                </p>
                <p className="complete-details">
                    Exchange Time (hours): {exchange.time_elapsed? (exchange.time_elapsed / 60).toFixed(3) : null}
                    <br />
                    Client Cost: {exchange.cost ? exchange.cost.toFixed(2) : null}
                    <br />
                    Listing Fee: {exchange.cost ? (exchange.cost * 0.04).toFixed(2) : null}
                    <br />
                    Net: {exchange.cost ? (exchange.cost * 0.96).toFixed(2) : null}
                    <br /> Taxes Calculation
                </p>
                <button onClick={handleShowExc} >SHOW DETAILS</button>
                {errors ? errors.map((err) => ( <p style={{
                    color: "red",
                    fontWeight: "bold"
                }} key={err}>
                        {err}
                </p>)): null}
            </div>
            
    )
}

export default OwnerExchange