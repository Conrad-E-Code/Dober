import {useState} from 'react'


function ResetPasswordForm({navigate}) {
    const [resetToken, setResetToken] = useState("")
    const [resetPass, setResetPass] = useState("")
    const [resetEmail, setResetEmail] = useState("")
    const [errors, setErrors] = useState([])
    function handleReset(e) {
        console.log("HANDLE RESET FIRED!")
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                "token": resetToken,
                "password": resetPass,
                "email": resetEmail})
        }
        fetch("/password/reset", configObj)
        .then(r => {
            if (r.ok) {
                console.log(r)
                navigate("/login")
            } else {
                r.json().then((err) => setErrors(err["errors"]))
            }
        })

    }
    return(
        <div className="reset-form">
            <h1>Password Reset</h1>
            <br/>
            <h3> Check your email and enter Token and New Password below</h3>
            <br/>
            <form onSubmit={(e) =>handleReset(e)}>

            <label> Enter Email
                    <input required onChange={(e) => setResetEmail(e.target.value)}type="text" placeholder="Enter Email  Here">
                    </input>
                </label>
                <br/>
                <label> Enter Token from email
                    <input required onChange={(e) => setResetToken(e.target.value)}type="text" placeholder="Enter Token Here">
                    </input>
                </label> 
                <br />       
                <label> Enter New Password
                    <input required onChange={(e) => setResetPass(e.target.value)}type="text" placeholder="Enter New Password Here">
                    </input>
                </label>
                <button type="submit"> Submit</button>
                {errors?      errors.map((err) => (
                <p style={{color: "red", fontWeight: "bold" }}
                key={err}>{err}</p>
            )): null}
            </form>
        </div>
    )
}

export default ResetPasswordForm