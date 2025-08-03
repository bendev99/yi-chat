import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import Home from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div className=" h-screen items-center justify-center">
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/login"
          element={authUser ? <Navigate to={"/home"} /> : <Welcome />}
        />

        <Route
          path="/register"
          element={authUser ? <Navigate to="/home" /> : <Welcome />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
