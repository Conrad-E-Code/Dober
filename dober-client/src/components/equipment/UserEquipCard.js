function UserEquipCard({equip}) {
    console.log(equip)
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