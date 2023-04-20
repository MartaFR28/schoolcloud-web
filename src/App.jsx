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
//import StudentDetails from './views/StudentsDetail/StudentDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
  
      <Routes>
      <Route path='teacherlogin' element={<TeacherLogin/>}/>
      <Route path='StudentLogin' element={<StudentLogin/>}/>
      <Route path='/students/:studentId' element={<StudentLogin/>}/>
      
      <Route path="TeacherProfile" element={
      <ProtectedRoute>
           <TeacherProfile/>
           </ProtectedRoute>
          } />
      <Route path="StudentPortal" element={
      <ProtectedRoute>
           <StudentPortal/>
           </ProtectedRoute>
          } />
      <Route path="CreateNewStudent" element={
      <ProtectedRoute>
           <CreateNewStudent/>
           </ProtectedRoute>
          }/>
      </Routes> 
    </div>
  )
}

export default App;
