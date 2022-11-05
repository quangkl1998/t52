import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashBoard } from "Slices/Login";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { dashboard } = useSelector((state: RootState) => state.login);
  console.log(dashboard);

  useEffect(() => {
    dispatch(getDashBoard());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-16 flex-wrap mt-20">
      <div className="w-full h-full px-5 py-8 flex shadow-md flex-col justify-between h rounded-3xl text-center bg-blue-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase ">
          Tổng số người đăng ký vay
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countClient}
        </p>
      </div>
      <div className="w-full h-full px-5 py-8 flex shadow-md flex-col justify-between h rounded-3xl text-center bg-red-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase">
          Tổng số tin tức
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countNews}
        </p>
      </div>
      <div className="w-full h-full px-5 py-8 flex shadow-md flex-col justify-between h rounded-3xl text-center bg-purple-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase">
          Tổng số đối tác
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countPartner}
        </p>
      </div>
      <div className="w-full h-full px-5 py-8 flex shadow-md flex-col justify-between h rounded-3xl text-center bg-yellow-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase">
          Tổng số cửa hàng
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countStore}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
