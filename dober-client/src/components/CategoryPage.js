import { useEffect, useState } from "react"
import CatCard from "./CatCard"

function CategoryPage(props) {
    const [cats, setCats] = useState([])
    const [errors, setErrors] = useState([])
    useEffect(() => {
        fetch("/categories")
        .then((r) => {
            if (r.ok) {
              r.json().then(data => {
                console.log(data)
                setCats(data)
            });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
    },[])
    
     const renderCats = cats.map((cat)=>{
        return(
            <CatCard cat={cat}></CatCard>)
        })

    return(
        <div className="avail-cats">
            {renderCats}
            {errors.map((err) => (
                    <p style={{color: "red", fontWeight: "bold" }}
                    key={err}>{err}</p>
                ))}
        </div>
    )
}

export default CategoryPage