import { useEffect } from "react"
import { useState } from "react"
import UserExchange from "./UserExchange"
import OwnerExchange from "./OwnerExchange"
import EquipCard from "../equipment/EquipCard"
import UserEquipCard from "../equipment/UserEquipCard"

function ExchangePage({user}) {
    const [userExchanges, setUserExchanges] = useState([])
    const [ownerExchanges, setOwnerExchanges] = useState([])

// fetch user exchanges from server
useEffect(()=>{
    fetch("/exchanges")
    .then((r)=> r.json())
    .then((data) => { 
        setUserExchanges(data)
                    console.log(data)})
},[])

//fetch owner exchanges
useEffect(()=>{
    fetch(`${user.id}/exchanges`)
    .then((r)=> r.json())
    .then((data) => { 
        setOwnerExchanges(data)
                    console.log(data)})
},[])

// const userExchanges = exchanges[0]["exchanges"].map((exchange) => {
//     return( <UserExchange exchange={exchange} />)
// })

function renderUserExchanges() {
    // if (Array.isArray(exchanges[0]["exchanges"]))
    if (!userExchanges) return <h1>Loading</h1>
    return (userExchanges.map((exchange) => {return( <UserExchange  setUserExchanges={setUserExchanges} exchange={exchange} />)}))
}
function renderOwnerExchanges() {
    // if (Array.isArray(exchanges[0]["exchanges"]))
    if (!ownerExchanges) return <h1>Loading</h1>
    return (ownerExchanges.map((exchange) => {return( <UserEquipCard  setOwnerExchanges={setOwnerExchanges} equip={exchange} />)}))
}

// const ownerExchanges = exchanges[1]["owner_exchanges"].map((exchange) => {
//     return( <OwnerExchange exchange={exchange} />)
// })


    return(
        <div className="exchange-page">
            <div className="exchange-div">
            <p className="exchange-header">YOUR EXCHANGES AS A USER</p>
                    {renderUserExchanges()}
            </div>
            <div className="owner-exchange-div">
                    <p className="exchange-header">EXCHANGES FOR EQUIPMENT YOU OWN</p>
                    {renderOwnerExchanges()}
            </div>
        </div>
    )
}

export default ExchangePage