import { useNavigate } from "react-router-dom"
import { useState } from "react"
function UserEquipCard({equip}) {
    const [errors, setErrors] = useState([])
    let navigate = useNavigate()
    console.log(equip)
    function onViewExchanges() {
        // navigate(`/equipment/${equip.id}/exchanges`)
        fetch(`equipment/${equip.id}/exchanges`)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data)
                })
                
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
        console.log("YO")
        // where is this gonna take us?
    }
return (
    <div className="user-equip-card">
        <table>
            <tr>
                <th>
                   Equipment Name:
                </th>
                <td>
                {equip.name}
                </td>
            </tr>
            <tr>
                <th>
                   Type:
                </th>
                <td>
                {equip.equip_type}
                </td>
            </tr>
            <tr>
                <th>Hourly Rate:</th>
                <td>
                    ${equip.hourly_rate}/hour
                </td>
                <td>
                <button onClick={onViewExchanges}>View Exchanges</button>
                </td>
            </tr>
            <tr>
                <th>
                    Owner: 
                </th>
                <td>{equip.name}</td>
            </tr>
        </table>
    </div>
)
}

export default UserEquipCard