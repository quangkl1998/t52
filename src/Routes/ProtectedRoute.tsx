import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../configStore";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { loginresult } = useSelector((state: RootState) => state.login);

  if (!loginresult) {
    // Chưa đăng nhập
    return <Navigate to="/login" />;
  }

  // đã đăng nhập
  return children;
};

export default ProtectedRoute;
