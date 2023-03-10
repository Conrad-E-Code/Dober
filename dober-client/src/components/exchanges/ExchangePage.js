import { useEffect } from "react"
import { useState } from "react"
import UserExchange from "./UserExchange"
import OwnerExchange from "./OwnerExchange"

function ExchangePage({user}) {
    const [exchanges, setExchanges] = useState([])

// fetch exchanges from server
useEffect(()=>{
    fetch("/exchanges")
    .then((r)=> r.json())
    .then((data) => { 
        setExchanges(data)
                    console.log(data)})
},[])

// const userExchanges = exchanges[0]["exchanges"].map((exchange) => {
//     return( <UserExchange exchange={exchange} />)
// })

function userExchanges() {
    // if (Array.isArray(exchanges[0]["exchanges"]))
    if (!exchanges[0]) return <h1>Loading</h1>
    return (exchanges[0]["exchanges"].map((exchange) => {return( <UserExchange  setExchanges={setExchanges} exchange={exchange} />)}))
}
function ownerExchanges() {
    // if (Array.isArray(exchanges[0]["exchanges"]))
    if (!exchanges[1]) return <h1>Loading</h1>
    return (exchanges[1]["owner_exchanges"].map((exchange) => {return( <OwnerExchange  setExchanges={setExchanges} exchange={exchange} />)}))
}

// const ownerExchanges = exchanges[1]["owner_exchanges"].map((exchange) => {
//     return( <OwnerExchange exchange={exchange} />)
// })


    return(
        <div className="exchange-page">
            <div className="exchange-div">
            <p className="exchange-header">YOUR EXCHANGES AS A USER</p>
                    {userExchanges()}
            </div>
            <div className="owner-exchange-div">
                    <p className="exchange-header">EXCHANGES FOR EQUIPMENT YOU OWN</p>
                    {ownerExchanges()}
            </div>
        </div>
    )
}

export default ExchangePage