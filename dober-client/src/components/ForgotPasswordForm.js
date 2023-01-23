import {useState} from "react"

function ForgotPasswordForm({navigate}) {
    const [forgotEmail, setForgotEmail] = useState("")
    const [errors, setErrors] = useState([])
function handleForgot(e) {
    e.preventDefault()
    const configObj = {
        method:"POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({"email": forgotEmail}),

    }
    fetch("/password/forgot", configObj)
    .then(r => {
        if (r.ok) {
            navigate("/reset")
        } else {
            r.json().then((err) => setErrors(err["errors"]))
        }
    })
    
}

    return (
        <div className="forgot-password">
            <h1>Forgot Password</h1>
            <h2>Enter email to receive temporary password</h2>
            <h3>You will be re-directed to the reset form</h3>
            <form onSubmit={(e) => handleForgot(e)}>
                <label> Enter Email:
                        <input type="text" onChange={(e) => {setForgotEmail(e.target.value)}} placeholder="Enter Email"></input>
                </label>
                <button type="submit" >Request Temp Password</button>
            </form>
            {errors?      errors.map((err) => (
                <p style={{color: "red", fontWeight: "bold" }}
                key={err}>{err}</p>
            )): null}
        </div>
    )

}

export default ForgotPasswordForm