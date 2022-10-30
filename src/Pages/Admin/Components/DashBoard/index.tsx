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
    <div className="flex justify-center items-center gap-16 flex-wrap mt-20">
      <div className="w-64 px-5 py-12 shadow-md rounded-3xl text-center bg-blue-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase ">
          Tổng số người đăng ký vay
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countClient}
        </p>
      </div>
      <div className="w-64 px-5 py-12 shadow-md rounded-3xl text-center bg-red-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase">
          Tổng số người đăng ký vay
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countClient}
        </p>
      </div>
      <div className="w-64 px-5 py-12 shadow-md rounded-3xl text-center bg-purple-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase">
          Tổng số người đăng ký vay
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countClient}
        </p>
      </div>
      <div className="w-64 px-5 py-12 shadow-md rounded-3xl text-center bg-yellow-100">
        <h3 className="font-bold text-xl text-yellow-500 uppercase">
          Tổng số người đăng ký vay
        </h3>
        <p className="font-bold text-4xl text-red-500">
          {dashboard?.countClient}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
