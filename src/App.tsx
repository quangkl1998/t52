import "./App.css";
import "animate.css";
import { lazy, Suspense } from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "Templates/HomeTemplate";
import MortgageLoanTemplate from "Templates/MortgageLoanTemplate";
import AdminTemplate from "Pages/Admin/Templates/AdminTemplate";
import ActivityNews from "Pages/ActivityNews/ActivityNews";
import loading from "Assets/loading.gif";
import ErrorBoundary from "Pages/Admin/Components/ErrorBoundary";
import ProtectedRoute from "Routes/ProtectedRoute";
import Question from "Pages/Admin/Components/Question/Question";
import AddQuestion from "Pages/Admin/Components/Question/AddQuestions/AddQuestions";
import ManagerList from "Pages/Admin/Components/Manager/Manager";

const Media = lazy(() => import("Pages/Admin/Components/Media/Media"));

const Tagnews = lazy(() => import("Pages/Admin/Components/TagNews/TagNews"));

const AdminPage = lazy(() => import("Pages/Admin/Pages/Admin/AdminPage"));
const PartnerList = lazy(
  () => import("Pages/Admin/Components/Partner/PartnerList"),
);
const FutureList = lazy(() => import("Pages/Admin/Components/Future/index"));
const ServiceList = lazy(
  () => import("Pages/Admin/Components/Service/Service"),
);
const AddServiceList = lazy(
  () => import("Pages/Admin/Components/Service/addService/index"),
);
const MenuList = lazy(() => import("Pages/Admin/Components/Menu/index"));
const CoreValueList = lazy(
  () => import("Pages/Admin/Components/CodeValue/index"),
);
const StoreDetail = lazy(
  () => import("Pages/Admin/Components/Store/StoreDetail/StoreDetail"),
);
const Introduce = lazy(
  () => import("Pages/Admin/Components/Introduce/introduce"),
);
const AddStore = lazy(
  () => import("Pages/Admin/Components/Store/AddStore/AddStore"),
);
const ClientList = lazy(
  () => import("Pages/Admin/Components/Client/ClientList"),
);
const AddClient = lazy(
  () => import("Pages/Admin/Components/Client/AddClient/AddClient"),
);
const StoreList = lazy(() => import("Pages/Admin/Components/Store/StoreList"));
const NewsAdmin = lazy(() => import("Pages/Admin/Components/News/News"));
const AddNews = lazy(
  () => import("Pages/Admin/Components/News/AddNews/AddNews"),
);
const Login = lazy(() => import("Pages/Admin/Pages/Login/Login"));
const DashBoard = lazy(() => import("Pages/Admin/Components/DashBoard"));
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
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center">
            <img src={loading} alt={loading} />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />}></Route>

            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <AdminTemplate />
                </ProtectedRoute>
              }
            >
              <Route path="" element={<AdminPage />}>
                <Route path="" element={<DashBoard />}></Route>
                <Route path="partner" element={<PartnerList />}></Route>
                <Route path="manager" element={<ManagerList />}></Route>
                <Route path="service" element={<ServiceList />}></Route>
                <Route
                  path="service/addservice"
                  element={<AddServiceList />}
                ></Route>
                <Route path="menu" element={<MenuList />}></Route>
                <Route path="future" element={<FutureList />}></Route>
                <Route path="corevalue" element={<CoreValueList />}></Route>
                <Route
                  path="store/storeDetail/:idStore"
                  element={<StoreDetail />}
                ></Route>
                <Route path="store/addStore" element={<AddStore />}></Route>
                <Route path="client" element={<ClientList />}></Route>
                <Route path="client/addClient" element={<AddClient />}></Route>

                <Route path="store" element={<StoreList />}></Route>
                <Route path="introduce" element={<Introduce />}></Route>

                <Route path="newsList" element={<NewsAdmin />}></Route>
                <Route path="media" element={<Media />}></Route>
                <Route path="tagnews" element={<Tagnews />}></Route>
                <Route path="question" element={<Question />}></Route>
                <Route path="addquestion" element={<AddQuestion />}></Route>
                <Route path="newsList/addNews" element={<AddNews />}></Route>
              </Route>
            </Route>

            {/* aaaaaaaaaa */}
            <Route path="" element={<HomeTemplate />}>
              <Route path="" element={<Home />} />

              <Route path="/about" element={<About />} />
              <Route
                path="/quan-he-nha-dau-tu"
                element={<InvestorRelations />}
              />
              <Route path="/tin-tuc-noi-bat" element={<News />} />
              <Route path="/tin-tuc-chi-tiet/:name" element={<NewsDetail />} />
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
              <Route path="/tin-tuc-hoat-dong" element={<ActivityNews />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to={""} />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
