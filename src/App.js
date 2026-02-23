import './App.css';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Todo from './pages/todo';
import Friends from './pages/friends';
function App() {
  return (
    <Routes>
      {/*Public Routes*/}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/*Protected Routes*/}
      <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/todo" element={<ProtectedRoute><Todo/></ProtectedRoute>}/>
      <Route path="/friends" element={<ProtectedRoute><Friends/></ProtectedRoute>}/>
    </Routes>
  );
}

export default App;
