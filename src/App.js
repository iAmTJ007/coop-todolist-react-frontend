import './App.css';
import Login from './pages/login';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './pages/register';
import Home from './pages/home';
import Friends from './pages/friends';
function App() {
  return (
    <Routes>
      {/*Public Routes*/}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/*Protected Routes*/}
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/todo" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/friends" element={<ProtectedRoute><Friends/></ProtectedRoute>}/>
    </Routes>
  );
}

export default App;
