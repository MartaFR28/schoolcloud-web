import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import StudentLogin from './views/Login/StudentLogin'
import TeacherLogin from './views/Login/TeacherLogin'
import CreateNewStudent from './views/CreateNewStudent/CreateNewStudent'
import StudentPortal from './views/StudentPortal/StudentPortal'
import TeacherProfile from './views/TeacherProfile/TeacherProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes> 
        <Route path="Teacher/profile" element={<TeacherProfile/>} />
        <Route path="Teacher/login" element={<TeacherLogin/>} />
        <Route path="Student/portal" element={<StudentPortal/>} />
        <Route path="Student/login" element={<StudentLogin/>} />
        <Route path="CreateNewStudent" element={<CreateNewStudent/>}/>
        </Routes>

          <ProtectedRoute>
            <TeacherProfile />
            <StudentPortal/>
            <CreateNewStudent/>
          </ProtectedRoute>
          
      
    </div>
  )
}

export default App;

