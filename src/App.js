import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './utils/ProtectedRoute';
import Profile from './Profile';
import ForgotPassword from './components/ForgetPassword';
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dash"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/forget-password"
          element={
           
              <ForgotPassword/>
          }
        />
      </Routes>
    </Router>
  );
};
 
export default App;