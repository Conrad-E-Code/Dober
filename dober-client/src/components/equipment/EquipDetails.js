import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect} from "react"



function EquipDetails({user}) {
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const [equip, setEquip] = useState({})
    let {id} = useParams()
    useEffect(() => { 
        fetch(`/equipment/${id}`)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data)
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
            <h2>OWNER: {equip["user"] ? equip["user"]["username"] :null }</h2>
            <h2>TYPE: {`${equip.equip_type}`}</h2>
            <p>Model: {`${equip.model}`}</p>
            <p>Location: {`${equip.coordinates}`}</p>
            <p>Description: {`${equip.description}`}</p>
            {errors.map((err) => (
                    <p style={{color: "red", fontWeight: "bold" }}
                    key={err}>{err}</p>
                ))}
                {false ? <h1>test</h1> :<button onClick={() => navigate(`/exchange/new/${equip.id}`)}>Borrow!</button>}
        </div>
    )
}

export default EquipDetails