import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Course from './components/Course';
import Footer from './components/Footer';
import Course_one from './Course/Course_one';
import Course_two from './Course/Course_two';
import Contact from './components/Contact';
import Signup from './SignupLogin/Signup';
import Login from './SignupLogin/Login';
import { useAuthContext } from './hooks/useAuthContext'; 

const App = () => {
  const { user, authIsReady } = useAuthContext(); 

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={user===null?<Navigate to='signup'/>:<Course />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/course" element={user ? <Course /> : <Navigate to='signup'/>} />
            <Route path="/course_one" element={user ? <Course_one /> : <Navigate to='signup'/>} />
            <Route path="/course_two" element={user ? <Course_two /> : <Navigate to='signup'/>} />
            <Route path="/contact" element={user ? <Contact /> : <Navigate to='signup'/>} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
