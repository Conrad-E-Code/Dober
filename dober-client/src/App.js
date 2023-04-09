import './App.css';
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import LoginForm from "./components/LoginForm"
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import Home from './components/Home';
import CreateEquipmentForm from './components/equipment/CreateEquipmentForm';
import CategoryPage from './components/categories/CategoryPage';
import EquipDetails from './components/equipment/EquipDetails';
import NewExchangeCard from './components/exchanges/NewExchangeCard';
import OwnerApproveForm from './components/exchanges/OwnerApproveForm';
import StartExchangeTimer from './components/exchanges/StartExchangeTimer';
import ExchangePage from './components/exchanges/ExchangePage';
import ExchangeDetail from './components/exchanges/ExchangeDetail';
import UserEquipPage from './components/equipment/UserEquipPage';
import MapPage from './components/MapPage';
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

        <Route element={<UserEquipPage user={user} />} path="/:user_id/equipment"></Route>
        
        <Route element={user ? console.log(user): <LoginForm
                 setUser={setUser}/> } path="/login"></Route>
        
        <Route element={<SignupForm navigate={navigate}/>} 
          path="/signup"></Route>
        
        <Route element={<ForgotPasswordForm navigate={navigate} />}
         path="/forgot"></Route>
         
         <Route element={<ResetPasswordForm navigate={navigate} />}
         path="/reset"></Route>
         
         <Route element={ user ? <EquipDetails user={user} /> :<LoginForm /> }
         path="/equipment/:id"></Route>

         <Route element={user ? <ExchangeDetail /> : <LoginForm />}
         path="/exchanges/:id"></Route>
         
         <Route element={user ?<CreateEquipmentForm navigate={navigate} />: <LoginForm />}
         path="/equipment/new"></Route>
         
         <Route element={user ?<NewExchangeCard user={user}/>: <LoginForm />}
         path="/exchange/new/:id"></Route>
          
          <Route element={user ?<OwnerApproveForm user={user}/>: <LoginForm />}
         path="/exchange/app/:id"></Route>

        <Route element={user ? <StartExchangeTimer user={user}/> : <LoginForm />}
         path="/exchange/start/:id"></Route>
        
        <Route element={user ? <ExchangePage user={user}/> : <LoginForm />}
         path="/exchanges"></Route>


         <Route element={<CategoryPage user={user} navigate={navigate} />}
         path="/categories"></Route>
         <Route element={<MapPage/>} path="/map" >
         </Route>

         <Route element={ user ? <Home user={user}/> :<LoginForm /> }
         path="/"></Route>

      </Routes>


    </div>
  );
}

export default App;
