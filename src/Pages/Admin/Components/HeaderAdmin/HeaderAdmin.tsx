import { Select } from "antd";
import { NavLink } from "react-router-dom";

const HeaderAdmin = () => {
  const { Option } = Select;

  const username = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string).account
    : "";

  const handleChange = (value: string) => {
    if (value === "logout") {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
  };
  return (
    <div>
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="store"></NavLink>
        </li>
        <Select value={username} style={{ width: 120 }} onChange={handleChange}>
          <Option value="logout">Logout</Option>
        </Select>
      </ul>
    </div>
  );
};

export default HeaderAdmin;
