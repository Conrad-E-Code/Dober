import { useEffect } from "react"

function ExchangePage({user}) {
// fetch exchanges from server
useEffect(()=>{
    fetch("/exchanges")
    .then((r)=> r.json())
    .then(data => console.log(data))
},[])


    return(
        <div className="exchange-page">
            Hello from ExchangePage I want to see a list of exchanges
            <div className="exchange-div">
                    render resp.exchanges here as mapped jsx
            </div>
            <div className="owner-exchange-div">
                    render resp.owner_exchanges here as mapped jsx
            </div>
        </div>
    )
}

export default ExchangePage