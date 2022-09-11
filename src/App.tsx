import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "Templates/HomeTemplate";
import Login from "Pages/Login/Login";
import Register from "Pages/Register/Register";
import LoanByMoto from "Pages/LoanByMoto/LoanByMoto";
import Home from "Pages/Home/Home";
import MortgageLoanTemplate from "Templates/MortgageLoanTemplate";
import LoanByCar from "Pages/LoanByCar/LoanByCar";
import LoanByRegisMoto from "Pages/LoanByRegisMoto/LoanByRegisMoto";
import LoanByRegisCar from "Pages/LoanByRegisCar/LoanByRegisCar";
import LoanByOther from "Pages/LoanByOther/LoanByOther";

import "antd/dist/antd.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeTemplate />}>
                    <Route path="" element={<Home />} />
                    <Route path="" element={<MortgageLoanTemplate />}>
                        <Route
                            path="/vay-tien-bang-cavet-xe-may"
                            element={<LoanByRegisMoto />}
                        />
                        <Route
                            path="/vay-tien-bang-cavet-o-to"
                            element={<LoanByRegisCar />}
                        />
                        <Route
                            path="/vay-tien-bang-xe-may"
                            element={<LoanByMoto />}
                        />
                        <Route
                            path="/vay-tien-bang-o-to"
                            element={<LoanByCar />}
                        />
                        <Route
                            path="/vay-tien-bang-tai-san-khac"
                            element={<LoanByOther />}
                        />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to={""} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
