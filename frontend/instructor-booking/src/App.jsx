import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute'
import UserProvider, { UserContext } from './context/userContext';

// Auth Imports
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/Signup"

// Admin Routes
import Dashboard from "./pages/Admin/Dashboard"
import ManageTasks from "./pages/Admin/ManageTasks"
import CreateTasks from "./pages/Admin/CreateTasks"
import ManageUsers from "./pages/Admin/ManageUsers"

// User Routes
import UserDashboard from "./pages/User/UserDashboard"
import MyTasks from "./pages/User/MyTasks"
import ViewTaskDetaiils from "./pages/User/ViewTaskDetails"
import { useContext } from 'react';


const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />


          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["instructor"]} />} >
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/tasks' element={<ManageTasks />} />
            <Route path='/admin/create-task' element={<CreateTasks />} />
            <Route path='/admin/users' element={<ManageUsers />} />
          </Route> 

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["user"]} />} >
            <Route path='/user/dashboard' element={<UserDashboard />} />
            <Route path='/user/tasks' element={<MyTasks />} />
            <Route path='/user/task-details/:id' element={<ViewTaskDetaiils />} />
          </Route> 


          {/* Default Route */}
          <Route path="/" element={<Root />} />

        </Routes>
      </Router>
    </div>
    </UserProvider>
  )
}

export default App

const Root = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <Outlet />;

  if (!user) {
    return <Navigate to="/login" />
  }

  return user.role === "instructor" ? <Navigate to="/admin/dashboard" /> : <Navigate to="/user/dashboard" />
}