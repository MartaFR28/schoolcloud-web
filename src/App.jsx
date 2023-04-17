import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Profile from './views/TeacherProfile/TeacherProfile'

import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import StudentLogin from './components/Login/schemas/StudentLogin'
import TeacherLogin from './components/Login/schemas/TeacherLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/*LOGIN*/}
        <Route path="student-portal" element={<StudentLogin/>} />
        <Route path="login" element={<TeacherLogin/>} />
        {/*TEACHERPROFILE*/}
        <Route path="Profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

      </Routes>
    </div>
  )
}

export default App
