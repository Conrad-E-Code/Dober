import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"



function EquipDetails() {
    const [errors, setErrors] = useState([])
    const [equip, setEquip] = useState({})
    let {id} = useParams()
    useEffect(() => { 
        fetch(`/equipment/${id}`)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => {
                    setEquip(prevState => {
                        return {...prevState, ...data}
                    })
                })
                
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    },[id])





    return(
        <div className="equip-detail">
            <h1>{`${equip.name}`}</h1>
            <h2>TYPE: {`${equip.equip_type}`}</h2>
            <p>Model: {`${equip.model}`}</p>
            <p>Location: {`${equip.coordinates}`}</p>
            <p>Description: {`${equip.description}`}</p>

            



            {errors.map((err) => (
                    <p style={{color: "red", fontWeight: "bold" }}
                    key={err}>{err}</p>
                ))}
    TASKS RENDER A LIST OF ASSOCIATED TASKOS!!!!
    TASKOS.where equip_id: params:id
        </div>
    )
}

export default EquipDetails