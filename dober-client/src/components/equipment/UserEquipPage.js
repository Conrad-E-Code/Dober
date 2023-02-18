import {useState, useEffect} from "react"
import UserEquipCard from "./UserEquipCard"
function UserEquipPage({user}) {
    const [equip, setEquip] = useState([])
    useEffect( () => {
        fetch("/equipment")
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setEquip(data)})
    },[])
    return(
        <div className="user-equip-page" >
            {user.username}'s Equipment!
            {equip.map((equip)=>{return (<UserEquipCard equip={equip}/>)})}
        </div>
    )
}

export default UserEquipPage