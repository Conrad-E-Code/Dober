import { useParams } from "react-router-dom"
import { useState } from "react"
function StartExchangeTimer(props) {
    const [errors, setErrors] = useState([])
    let {id} = useParams()

    const configObj = {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({"testkey":"testvalue"})
    }

    function handleStartTimer() {
        fetch(`/exchange/start/${id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => console.log(data))
                // navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }

    function handleEndTimer() {
        fetch(`/exchange/end/${id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => console.log(data))
                // navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }

    return (
        <div className="start-exchange-timer">
            <br/>
            <button onClick={handleStartTimer}>START</button>
            <br/>
            <button onClick={handleEndTimer}>END</button>
            {errors?      errors.map((err) => (
            <p style={{color: "red", fontWeight: "bold" }}
            key={err}>{err}</p>)): null} 
        </div>
    )

}

export default StartExchangeTimer