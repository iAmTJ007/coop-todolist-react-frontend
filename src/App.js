import './App.css';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <Routes>
      {/*Public Routes*/}
      <Route path="/login" element={<Login/>}/>
      {/*Protected Routes*/}
      <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
  );
}

export default App;
