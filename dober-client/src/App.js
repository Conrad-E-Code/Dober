import './App.css';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import LoginForm from "./components/LoginForm"
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import Home from './components/Home';
import CreateEquipmentForm from './components/CreateEquipmentForm';
import CategoryPage from './components/CategoryPage';
import EquipDetails from './components/EquipDetails';
import NewExchangeCard from './components/NewExchangeCard';
import OwnerApproveForm from './components/OwnerApproveForm';
import StartExchangeTimer from './components/StartExchangeTimer';
import ExchangePage from './components/ExchangePage';
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
        
        <Route element={<ForgotPasswordForm navigate={navigate} />}
         path="/forgot"></Route>
         
         <Route element={<ResetPasswordForm navigate={navigate} />}
         path="/reset"></Route>
         
         <Route element={ user ? <EquipDetails /> :<LoginForm /> }
         path="/equipment/:id"></Route>
         
         <Route element={<CreateEquipmentForm navigate={navigate} />}
         path="/equipment/new"></Route>
         
         <Route element={<NewExchangeCard user={user}/>}
         path="/exchange/new/:id"></Route>
          
          <Route element={<OwnerApproveForm user={user}/>}
         path="/exchange/app/:id"></Route>

        <Route element={<StartExchangeTimer user={user}/>}
         path="/exchange/start/:id"></Route>
        
        <Route element={<ExchangePage user={user}/>}
         path="/exchanges"></Route>


         <Route element={<CategoryPage navigate={navigate} />}
         path="/categories"></Route>

         <Route element={ user ? <Home/> :<LoginForm /> }
         path="/"></Route>

      </Routes>


    </div>
  );
}

export default App;
