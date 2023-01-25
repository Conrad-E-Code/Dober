import { useParams } from "react-router-dom"

function StartExchangeTimer(props) {
    let {id} = useParams()

    const configObj = {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({"testkey":"testvalue"})
    }

    function handleStartTimer() {
        fetch(`/exchange/start/${id}`, configObj)
        .then(r => r.json())
        .then(startData => console.log(startData))
        console.log("handleStartTimer")
    }

    function handleEndTimer() {
        fetch(`/exchange/end/${id}`, configObj)
    }

    return (
        <div className="start-exchange-timer">
            <br/>
            <button onClick={handleStartTimer}>START</button>
            <br/>
            <button onClick={handleEndTimer}>END</button>

        </div>
    )

}

export default StartExchangeTimer