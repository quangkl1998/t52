import "./App.css";
import { lazy, Suspense } from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "Templates/HomeTemplate";
import MortgageLoanTemplate from "Templates/MortgageLoanTemplate";

import loading from "Assets/loading.gif";

const Login = lazy(() => import("Pages/Login/Login"));
const Register = lazy(() => import("Pages/Register/Register"));
const LoanByMoto = lazy(() => import("Pages/LoanByMoto/LoanByMoto"));
const Home = lazy(() => import("Pages/Home/Home"));
const LoanByCar = lazy(() => import("Pages/LoanByCar/LoanByCar"));
const LoanByRegisMoto = lazy(
  () => import("Pages/LoanByRegisMoto/LoanByRegisMoto"),
);
const LoanByRegisCar = lazy(
  () => import("Pages/LoanByRegisCar/LoanByRegisCar"),
);
const LoanByOther = lazy(() => import("Pages/LoanByOther/LoanByOther"));

const About = lazy(() => import("Pages/About/About"));
const InvestorRelations = lazy(
  () => import("Pages/InvestorRelations/InvestorRelations"),
);
const News = lazy(() => import("Pages/News/News"));
const StoresNearYou = lazy(() => import("Pages/StoresNearYou/StoresNearYou"));
const FinancialKnowledge = lazy(
  () => import("Pages/FinancialKnowledge/FinancialKnowledge"),
);
const NewsDetail = lazy(() => import("Pages/NewsDetail/NewsDetail"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <img src={loading} alt={loading} />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/quan-he-nha-dau-tu" element={<InvestorRelations />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/tin-tuc-chi-tiet/:id" element={<NewsDetail />} />
            <Route path="/cua-hang-gan-ban" element={<StoresNearYou />} />
            <Route
              path="/kien-thuc-tai-chinh"
              element={<FinancialKnowledge />}
            />
            <Route path="" element={<MortgageLoanTemplate />}>
              <Route
                path="/vay-tien-bang-cavet-xe-may"
                element={<LoanByRegisMoto />}
              />
              <Route
                path="/vay-tien-bang-cavet-o-to"
                element={<LoanByRegisCar />}
              />
              <Route path="/vay-tien-bang-xe-may" element={<LoanByMoto />} />
              <Route path="/vay-tien-bang-o-to" element={<LoanByCar />} />
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
    </Suspense>
  );
}

export default App;
