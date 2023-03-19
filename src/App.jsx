import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home,Dashboard,Analitycs,Landing, Admin } from './pages'
import { Navigation, ProtectedRoute } from './components'
import { useState } from 'react'

function App() {

  const [user,setUser] = useState(null)

  const login = () => {
    // request done ... Pedido al Backend sobre la informacion de usuario

    setUser ({
      id: 1,
      name: 'corso',
      permission:'analitycs',
      roles: 'admin'
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <BrowserRouter>

      <Navigation/>

      {
        user ? (<button onClick={logout}> Logout </button>)
        :( <button onClick={login}> Login </button>)
      }

      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/*" element={<Landing />}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route element={<ProtectedRoute isAllowed={!!user} redirectto='/landing'/>}>
          <Route path="/Home" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>      
        <Route path="/analitycs" element={
          <ProtectedRoute isAllowed={!!user && user.permission.includes('analitycs')} redirectto='/landing'>
            <Analitycs/>
          </ProtectedRoute>}
        />
        <Route path='/admin' element={
          <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')} redirectto='/landing'>
            <Admin/>
          </ProtectedRoute>}
        />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
 
//<ProtectedRoute user={user} redirectto='/landing'>