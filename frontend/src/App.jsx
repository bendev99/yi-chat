import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Contact from "./components/Contact";
import { useEffect } from "react";

const App = () => {
  const { authUser } = useAuthContext();

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }, []);

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
