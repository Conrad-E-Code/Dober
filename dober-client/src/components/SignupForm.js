import {useState} from "react"

function SignupForm({navigate}) {

    const [newUser, setNewUser] = useState("")
    const [newPass, setNewPass] = useState("")
    const [newConfirm, setNewConfirm] =useState("")
    const [newEmail, setNewEmail] =useState("")
    const [newCoords, setNewCoords] =useState("")
    const [newPhone, setNewPhone] =useState("")
    // const [new, setNew] =useState("")

    
    const [errors, setErrors] = useState([]) 

    function handleSignUp(e) {
        e.preventDefault()
        const signUpObj = {
            username: newUser,
            password: newPass,
            email: newEmail,
            coordinates: newCoords,
            phone_number: newPhone,
            password_confirmation: newConfirm
        }
        const signUpConfigObj= {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(signUpObj)
        }
        fetch("/signup",signUpConfigObj)
        .then((r) => {
            if (r.ok) {
              r.json().then(user => {
                console.log(user)
                navigate("/login")
            });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
    }
    return(
        <div className="signup">
            Create A New Account!
            <form className="signup-form" onSubmit={handleSignUp} >
                <label className="form-input"><input 
                placeholder="Username"
                 type="text" onChange={(e) => setNewUser(e.target.value)}></input>Enter Username</label>
                <br/>
                <label className="form-input"><input 
                 placeholder="Password"
                  type="password" onChange={(e) => setNewPass(e.target.value)}></input>Enter New Password</label>
                <br/>
                <label className="form-input"><input 
                 placeholder="Confirm Password"
                  type="password" onChange={(e) => setNewConfirm(e.target.value)}></input>Confirm Password</label>
                <br/>
                <label className="form-input">
                    <input  type="text" placeholder="email"
                    onChange={(e) => setNewEmail(e.target.value)}>
                    </input>Email
                </label>
                <br/>
                {/* <label className="form-input">Coordinates
                    <input className="form-input" type="text" placeholder="coordinates"
                    onChange={(e) => setNewCoords(e.target.value)}>
                    </input>
                </label>      
                <br/>
                <label  className="form-input">Phone Number
                    <input type="text" placeholder="phone-number"
                    onChange={(e) => setNewPhone(e.target.value)}>
                    </input>
                </label> */}
                <br/>
                {errors.map((err) => (
                    <p style={{color: "red", fontWeight: "bold" }}
                    key={err}>{err}</p>
                ))}
                <br/>
                 <button className="submit-signup" type="submit">Create Account!</button>
            </form>
        </div>
    )
}

export default SignupForm