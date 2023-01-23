import {useState} from "react"


function CreateEquipmentForm({navigate}) {
const [newName, setNewName] = useState("")
const [newModel, setNewModel] = useState("")
const [newYear, setNewYear] = useState("")
const [newDescription, setNewDescription] = useState("")
const [newHourly, setNewHourly] = useState("")
const [newCat, setNewCat] = useState("")
const [errors, setErrors] = useState([])

    function handleNewEquipment(e) {

        e.preventDefault()
        const newEquipObj = {
            "name": newName,
            "model": newModel,
            "year" : newYear,
            "description": newDescription,
            "hourly_rate":newHourly,
            "category" :newCat
        }
        const configObj = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newEquipObj)
        }
        fetch("/equipment", configObj)
        .then(r => {
            if (r.ok) {
                r.json().then((data) => console.log(data))
                navigate("/")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })
    }
    let date =  new Date().getFullYear()
    const categories = ["CHOOSE A CATEGORY","EVERYTHING ELSE","GARDEN & LANSCAPING","SNOW REMOVAL","TRAILER, TOWING & LOGISTICS","FARMING/AGRICULTURE","CONSTRUCTION & HEAVY","GENERATORS","HOME"]
    const mappedCats = categories.map((cat) => {
        return(
            <option value={cat}>{`${cat}`}</option>
        )
    })
    return(
        <div className="new-equip-form">
            <h1>Post Your Equipment</h1>
            <h3> Enter equipment details below</h3>
            <form onSubmit={(e) => handleNewEquipment(e)}>
                <label> Select Category
                    <select onChange={(e) =>setNewCat(e.target.value)}>
                    {mappedCats}
                    </select>
                </label>
                <br/>
                <label> Equipment Name:
                <input type="text" placeholder="Name"
                onChange={(e) => {setNewName(e.target.value)}}></input>
                </label>
                <br/>
                <label> Equipment Model:
                <input type="text" placeholder="Model"
                onChange={(e) => {setNewModel(e.target.value)}}></input>
                </label>
                <br/>
                <label> Equipment Year:
                <input type="number" min="1900" max={date}
                onChange={(e) => {setNewYear(e.target.value)}}></input>
                </label>
                <br/>
                <label> Equipment Description:
                <input type="text" placeholder="Description"
                onChange={(e) => {setNewDescription(e.target.value)}}></input>
                </label>
                <br/>
                <label> Equipment hourly_rate:
                $<input type="number"
                onChange={(e) => {setNewHourly(e.target.value)}}></input>
                </label>
            <button type="submit">Post Equipment!</button>
            </form>
            {errors.map((err) => (
                    <p style={{color: "red", fontWeight: "bold" }}
                    key={err}>{err}</p>
                ))}
        </div>
    )

}


export default CreateEquipmentForm