import { useState } from "react"

const [errors, setErrors] = useState([])

.then(r => {
    if (r.ok) {
        r.json().then((data) => console.log(data))
        navigate("/")
    } else {
        r.json().then((err) => setErrors(err["errors"]))
    }
})


{errors?      errors.map((err) => (
    <p style={{color: "red", fontWeight: "bold" }}
    key={err}>{err}</p>
)): null} 

biltin