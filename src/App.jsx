import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { userListener } from './config/authCall'
import { AuthProvider } from './hooks/useAuth'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0);

  // const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   console.log(number);
  // }, (number));

  return (
    <>
      <div>

        <BrowserRouter>

          {/* <Button onClick={() => setNumber(number += 1)}>change number</Button> */}

          <AuthProvider>
            {/* Todas estas rutas se podran acceder con autenticación */}

            <Routes>
              <Route 
                path='/login'
                element={<Login mail={'diegoa.cruz@softtek.com'}></Login>}
              >
              </Route>

              <Route
                path='/createUser'
                element={<CreateUser></CreateUser>}
              >
              </Route>

              <Route
                path='/navbar'
                element={<ProtectedRoute><Navbar></Navbar></ProtectedRoute>}
              >
              </Route>
            </Routes>
            
          </AuthProvider>

        </BrowserRouter>

        {/* <div>
          <h2>Create User</h2>
          <CreateUser></CreateUser>
        </div>

        <div>
          <h2>Log In</h2>
          <Login></Login>
        </div> */}
      </div>
    </>
  )
}

export default App
