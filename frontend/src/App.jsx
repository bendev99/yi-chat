import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import Login from "./pages/LoginForm";
import Home from "./pages/HomePage";
import Register from "./pages/RegisterForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
