import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "Templates/HomeTemplate";
import Login from "Pages/Login/Login";
import Register from "Pages/Register/Register";
import Home from "Pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeTemplate />}>
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to={""} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
