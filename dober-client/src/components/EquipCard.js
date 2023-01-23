//import { useState } from "react"
import { useNavigate } from "react-router-dom"

function EquipCard({equip}) {
    let navigate = useNavigate()
    function handleShowEquip() {
        navigate(`/equipment/${equip.id}`)

    }
    return(
        <div onClick={handleShowEquip} className="equip-card">
            <h4>{`${equip.name}`}</h4>
        </div>
    )
}

export default EquipCard