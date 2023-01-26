//import { useState } from "react"
import { useNavigate } from "react-router-dom"

function EquipCard({equip}) {
    let navigate = useNavigate()
    function handleShowEquip() {
        navigate(`/equipment/${equip.id}`)

    }
    return(
        <div onClick={handleShowEquip} className="equip-card">
            <ul className="equip-detail-list">
                    <p className="equip-detail-list-header"
                    >{`${equip.name}`}
                    </p>
                    <p className="equip-detail-list-subheader">{`${equip.equip_type}`}</p>
                    <p>OWNER: {equip["user"]["username"]}</p>
                
            </ul>
        </div>
    )
}

export default EquipCard