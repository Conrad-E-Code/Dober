import { useState } from "react"
import EquipCard from "./EquipCard"
function CatCard({cat}) {
    const [show, setShow] = useState(false)
    const [catEquip, setCatEquip] = useState([])
    const [errors, setErrors] = useState([])

    function handleCatClick() {
        console.log(cat)
        fetch(`/categories/${cat.id}`)
        .then((r) => {
            if (r.ok) {
              r.json().then(data => {
                console.log(data)
                setCatEquip(data)
                setShow(!show)
            });
            } else {
              r.json().then((err) => setErrors(err.errors));
              setShow(!show)
            }
          })

        
    }
    return(
        <div onClick={handleCatClick} className="cat-card">
            <div className="cat-title"><p>{`${cat.name}`}</p></div>
            {show && Array.isArray(catEquip) ? 
                catEquip.map((equip)=>{return (<EquipCard equip={equip}/>)}) :
                console.log(show)}
            {show ? errors.map((err) => (
                    <p style={{color: "red", fontWeight: "bold" }}
                    key={err}>{err}</p>
            )) : console.log(show)}
        </div>
    )
}

export default CatCard

