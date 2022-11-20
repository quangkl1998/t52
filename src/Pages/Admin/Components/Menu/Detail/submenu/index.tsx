import React, { useMemo } from "react";

import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

const SubMenu = ({ data }: any) => {
  const dataSub = useMemo(() => data, [data]);

  let navigate = useNavigate();

  const columns: ColumnsType<any> = [
    {
      title: "name",
      dataIndex: "name",
    },

    {
      title: "Hành động",
      align: "center",
      width: 200,
      render: (value, record, index) => (
        <div>
          <Button
            block
            onClick={() =>
              navigate(`/dashboard/submenu/detail/${record?.id}`, {
                replace: true,
              })
            }
          >
            Chi tiết
          </Button>
        </div>
      ),
    },
  ];

  const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    /* console.log("params", pagination, filters, sorter, extra); */
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Mục
      </h1>
      <Button
        className="mb-2"
        onClick={() =>
          navigate("/dashboard/submenu", {
            replace: true,
          })
        }
      >
        Thêm
      </Button>

      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        dataSource={dataSub}
        onChange={onChange}
        bordered
      />
    </div>
  );
};

export default SubMenu;
