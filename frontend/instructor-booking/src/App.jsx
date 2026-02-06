import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Admin/Dashboard"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/Signup"
import ManageTasks from "./pages/Admin/ManageTasks"
import CreateTasks from "./pages/Admin/CreateTasks"
import ManageUsers from "./pages/Admin/ManageUsers"

// User Routes
import UserDashboard from "./pages/User/UserDashboard"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />


          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />} >
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/tasks' element={<ManageTasks />} />
            <Route path='/admin/create-task' element={<CreateTasks />} />
            <Route path='/admin/users' element={<ManageUsers />} />
          </Route> 

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["user"]} />} >
            <Route path='/user/dashboard' element={<UserDashboard />} />
          </Route> 

        </Routes>
      </Router>
    </div>
  )
}

export default App


21:20 