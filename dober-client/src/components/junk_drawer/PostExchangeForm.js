

function PostExchangeForm() {
    const [name, setName] = useState("")
    const [imageFile, setImageFile] = useState(null)
    function onImageAdded(e) {
// e.target.files
        setImageFile(e.target.files[0])
    }
//useREf 11:32
function handleSubmit() {
    configObj = {
        method: "POST",
        headers: {
            accepts: "application/json"
        },
        body: JSON.stringify({"testkey":"testvalue"})
    }
    fetch(URL, configObj)
}
    return(
        <div className="post-form" >  
            <form>
                <label>
                    <input type="text">
                    </input>
                </label>
                <label>
                    <input type="file" onChange={onImageAdded}>
                    </input>
                </label>
            </form>
         
        </div>
    )
}

/*
Cloudinary Notes: API KEY, API SECRET




*/