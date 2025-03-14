import { Navigate, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import Auth from "./pages/authorization/Auth";
import { Login } from "./pages/authorization/Login";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state: any) => state.auth.token);

  return (
    <>
      <div className=" relative">
        <Routes>
          <Route
            path="/Dashboard"
            element={token ? <Dashboard /> : <Navigate to={"/"} />}
          />

          <Route
            path="/"
            element={!token ? <Auth /> : <Navigate to="/Dashboard" />}
          >
            <Route element={<Login />} index />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
