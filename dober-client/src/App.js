import './App.css';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import LoginForm from "./components/LoginForm"
import SignupForm from './components/SignupForm';
function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState("")

  useEffect(() => {
    fetch("/me")
      .then(resp => {
        if (resp.ok) {
          resp.json().then(data => {
            console.log(data)
            setUser(data)
          })
        }
      }
    )
  }, [])

  function handleLogout() {
    const logoutObj = { method: "DELETE" }
    fetch("/logout", logoutObj)
    .then(() => {
      setUser("")
      navigate("/login")
    })
  }

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} user={user}/>
      <Routes>
        <Route element={user ? console.log(user): <LoginForm
                 setUser={setUser}/> } path="/login"></Route>
        <Route element={<SignupForm navigate={navigate}/>} 
                                      path="/signup"></Route>
      </Routes>


    </div>
  );
}

export default App;
