import { useState } from "react"
function UserExchange({exchange}) {
    const [errors, setErrors] = useState([])
    const configObj = {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({"testkey":"testvalue"})
    }
    function handleStartTimer() {
        fetch(`/exchange/start/${exchange.id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => window.location.reload())
                // navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }

    function handleEndTimer() {
        fetch(`/exchange/end/${exchange.id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => window.location.reload())
                // navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }

    return(
        <div className="exchange-card">
            <p className="exchange-detail">
                Exchange ID: {`${exchange.id}`}
            </p>
            <p className="exchange-detail"> Status: {exchange.owner_approved && (exchange.ended_at !== null)? "COMPLETE" : !exchange.owner_approved ?  "Pending Equipment Owner Approval": (exchange.started_at !== null) ? "STARTED":"APPROVED, Ready To Start" } 
            {(exchange.owner_approved === true) && (exchange.started_at === null) ? <button className="exchange-button" onClick={handleStartTimer}>START</button> : console.log(exchange.started_at)}
            {(exchange.started_at !== null) && (exchange.ended_at === null) ? <button className="exchange-button"onClick={handleEndTimer}>END</button>: console.log(exchange.started_at) }</p>
            
            { exchange.cost ? <p className="complete-details">
                    Exchange Time (hours): {exchange.time_elapsed? (exchange.time_elapsed / 60).toFixed(3) : null}
                    <br />
                    Your Cost: {exchange.cost ? exchange.cost.toFixed(2) : null}
                    <br />
                    Net: {exchange.cost ? (exchange.cost * 0.96).toFixed(2) : null}
                    <br /> Taxes Calculation
                    
                </p> : null}
            
            {errors ? errors.map((err) => ( <p style={{
                color: "red",
                fontWeight: "bold"
             }} key={err}>
                    {err}
            </p>)): null}
        </div>
    )
}

export default UserExchange