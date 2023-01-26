import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
function ExchangeDetail() {
    const [errors, setErrors] = useState([])
    const [exc, setExc] = useState([])
    let {id} = useParams()

    useEffect(() => { 
        fetch(`/exchanges/${id}`)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data)
                    setExc(prevState => {
                        return {...prevState, ...data}
                    })
                })
                
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    },[id])

    
    // function handleExcClick() {
    //     console.log(cat)
    //     fetch(`/exchanges/${id}`)
    //     .then((r) => {
    //         if (r.ok) {
    //           r.json().then(data => {
    //             console.log(data)
    //             setExc(data)
    //             setShow(!show)
    //         });
    //         } else {
    //           r.json().then((err) => setErrors(err.errors));
    //           setShow(!show)
    //         }
    //       })

        
    // }

    return (
        <div className="equip-detail">EXCHANGE DETAIL
            <p className="equip-detail-list-header">Borrower: {exc.user ? exc.user.username : console.log(exc)}
            <br/>
            Equipment: {exc.equipment ? exc.equipment.name : console.log(exc)}
            <br/>
            Start Time: {exc.started_at? exc.started_at : console.log(exc)}
            <br/>
            End Time: {exc.ended_at? exc.ended_at : console.log(exc)}
            <br/>
            Hourly Rate: {exc.equipment? "$ " + exc.equipment.hourly_rate.toFixed(2): console.log(exc)}</p>
            <br/>
            COST: {exc.cost? "$ " + exc.cost.toFixed(2) : console.log(exc)}
            {errors? errors.map((err) => (
            <p style={{color: "red", fontWeight: "bold" }}
            key={err}>{err}</p>)) : null}
        </div>
    )
}




export default ExchangeDetail
