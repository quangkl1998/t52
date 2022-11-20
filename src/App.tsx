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
import HomeSlug from "Pages/HomeSlug/HomeSlug";
import ThongBao from "Pages/ThongBao/ThongBao";
import Loan from "Pages/Loan/Loan";
import LoanByCar from "Pages/LoanByCar/LoanByCar";

const ManagerList = lazy(
    () => import("Pages/Admin/Components/Manager/Manager"),
);
const Media = lazy(() => import("Pages/Admin/Components/Media/Media"));
const Question = lazy(() => import("Pages/Admin/Components/Question/Question"));
const AddQuestion = lazy(
    () => import("Pages/Admin/Components/Question/AddQuestions/AddQuestions"),
);

const Tagnews = lazy(() => import("Pages/Admin/Components/TagNews/TagNews"));

const AdminPage = lazy(() => import("Pages/Admin/Pages/Admin/AdminPage"));
const PartnerList = lazy(
    () => import("Pages/Admin/Components/Partner/PartnerList"),
);
const FutureList = lazy(() => import("Pages/Admin/Components/Future/index"));
const FutureDetail = lazy(
    () => import("Pages/Admin/Components/Future/Detail/index"),
);
const AddFuture = lazy(() => import("Pages/Admin/Components/Future/Add/index"));

const BannerList = lazy(() => import("Pages/Admin/Components/Banner/index"));
const ProvinceList = lazy(
    () => import("Pages/Admin/Components/Province/index"),
);

const DistrictList = lazy(
    () => import("Pages/Admin/Components/District/index"),
);
const ServiceList = lazy(
    () => import("Pages/Admin/Components/Service/Service"),
);
const AddServiceList = lazy(
    () => import("Pages/Admin/Components/Service/addService/index"),
);
const DetailService = lazy(
    () => import("Pages/Admin/Components/Service/detailService/index"),
);
const MenuList = lazy(() => import("Pages/Admin/Components/Menu/index"));
const AddMenu = lazy(() => import("Pages/Admin/Components/Menu/addMenu"));
const SubMenu = lazy(() => import("Pages/Admin/Components/subMenu"));
const MenuDetail = lazy(() => import("Pages/Admin/Components/Menu/Detail"));
const SubMenuDetail = lazy(
    () => import("Pages/Admin/Components/subMenu/detail"),
);
const CoreValueList = lazy(
    () => import("Pages/Admin/Components/CodeValue/index"),
);
const AddCoreValue = lazy(
    () => import("Pages/Admin/Components/CodeValue/AddCoreValue/index"),
);
const CoreValueDetail = lazy(
    () => import("Pages/Admin/Components/CodeValue/Detail/index"),
);
const StoreDetail = lazy(
    () => import("Pages/Admin/Components/Store/StoreDetail/StoreDetail"),
);
const Introduce = lazy(
    () => import("Pages/Admin/Components/Introduce/introduce"),
);
const AddIntroduce = lazy(
    () => import("Pages/Admin/Components/Introduce/Add/index"),
);
const IntroduceDetail = lazy(
    () => import("Pages/Admin/Components/Introduce/Detail/index"),
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
const AdminNewsDetail = lazy(
    () => import("Pages/Admin/Components/News/NewsDetail/index"),
);
const AddNews = lazy(
    () => import("Pages/Admin/Components/News/AddNews/AddNews"),
);
const Login = lazy(() => import("Pages/Admin/Pages/Login/Login"));
const DashBoard = lazy(() => import("Pages/Admin/Components/DashBoard"));
const Register = lazy(() => import("Pages/Register/Register"));
const Home = lazy(() => import("Pages/Home/Home"));

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
                                <Route
                                    path="partner"
                                    element={<PartnerList />}
                                ></Route>
                                <Route
                                    path="banner"
                                    element={<BannerList />}
                                ></Route>
                                <Route
                                    path="district"
                                    element={<DistrictList />}
                                ></Route>
                                <Route
                                    path="province"
                                    element={<ProvinceList />}
                                ></Route>

                                <Route
                                    path="manager"
                                    element={<ManagerList />}
                                ></Route>
                                <Route
                                    path="service"
                                    element={<ServiceList />}
                                ></Route>
                                <Route
                                    path="service/addservice"
                                    element={<AddServiceList />}
                                ></Route>
                                <Route
                                    path="service/detail/:id"
                                    element={<DetailService />}
                                ></Route>
                                <Route
                                    path="submenu"
                                    element={<SubMenu />}
                                ></Route>
                                <Route
                                    path="submenu/detail/:id"
                                    element={<SubMenuDetail />}
                                ></Route>
                                <Route
                                    path="menu"
                                    element={<MenuList />}
                                ></Route>
                                <Route
                                    path="menu/detail/:id"
                                    element={<MenuDetail />}
                                ></Route>
                                <Route
                                    path="menu/addmenu"
                                    element={<AddMenu />}
                                ></Route>
                                <Route
                                    path="future"
                                    element={<FutureList />}
                                ></Route>
                                <Route
                                    path="future/addfuture"
                                    element={<AddFuture />}
                                ></Route>
                                <Route
                                    path="future/detail/:id"
                                    element={<FutureDetail />}
                                ></Route>
                                <Route
                                    path="corevalue"
                                    element={<CoreValueList />}
                                ></Route>
                                <Route
                                    path="corevalue/addcorevalue"
                                    element={<AddCoreValue />}
                                ></Route>
                                <Route
                                    path="corevalue/detail/:id"
                                    element={<CoreValueDetail />}
                                ></Route>
                                <Route
                                    path="store/storeDetail/:idStore"
                                    element={<StoreDetail />}
                                ></Route>
                                <Route
                                    path="store/addStore"
                                    element={<AddStore />}
                                ></Route>
                                <Route
                                    path="client"
                                    element={<ClientList />}
                                ></Route>
                                <Route
                                    path="client/addClient"
                                    element={<AddClient />}
                                ></Route>

                                <Route
                                    path="store"
                                    element={<StoreList />}
                                ></Route>
                                <Route
                                    path="introduce"
                                    element={<Introduce />}
                                ></Route>
                                <Route
                                    path="introduce/detail/:id"
                                    element={<IntroduceDetail />}
                                ></Route>
                                <Route
                                    path="introduce/addintroduce"
                                    element={<AddIntroduce />}
                                ></Route>

                                <Route
                                    path="newsList"
                                    element={<NewsAdmin />}
                                ></Route>
                                <Route path="media" element={<Media />}></Route>
                                <Route
                                    path="tagnews"
                                    element={<Tagnews />}
                                ></Route>
                                <Route
                                    path="question"
                                    element={<Question />}
                                ></Route>
                                <Route
                                    path="addquestion"
                                    element={<AddQuestion />}
                                ></Route>
                                <Route
                                    path="newslist/addNews"
                                    element={<AddNews />}
                                ></Route>
                                <Route
                                    path="newslist/newdetail/:slug"
                                    element={<AdminNewsDetail />}
                                ></Route>
                            </Route>
                        </Route>

                        {/* aaaaaaaaaa */}
                        <Route path="" element={<HomeTemplate />}>
                            <Route path="" element={<Home />} />
                            <Route path="/:slug" element={<HomeSlug />} />
                            <Route
                                path="/:menuslug/:subslug"
                                element={<ThongBao />}
                            />

                            <Route path="/ve-t52" element={<About />} />
                            <Route
                                path="/quan-he-nha-dau-tu"
                                element={<InvestorRelations />}
                            />
                            <Route path="/tin-tuc" element={<News />} />
                            <Route
                                path="/tin-tuc-chi-tiet/:name"
                                element={<NewsDetail />}
                            />
                            <Route
                                path="/cua-hang-gan-ban"
                                element={<StoresNearYou />}
                            />
                            <Route
                                path="/kien-thuc-tai-chinh"
                                element={<FinancialKnowledge />}
                            />
                            <Route path="" element={<MortgageLoanTemplate />}>
                                <Route
                                    path="/vay-bang/:slug"
                                    element={<Loan />}
                                />
                                <Route
                                    path="/vay-ngay"
                                    element={<LoanByCar />}
                                />
                            </Route>
                            <Route
                                path="/tin-tuc-hoat-dong"
                                element={<ActivityNews />}
                            />
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
