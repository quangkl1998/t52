import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Table } from "antd";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { deleteItem, getList } from "Slices/loanguide";
const LoanGuide = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { list } = useSelector((state: RootState) => state.loanguide);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const onDelete = (id: string) => {
    dispatch(deleteItem(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfuly") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const columns: ColumnsType<any> = [
    {
      title: "Thông tin",
      dataIndex: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Hình ảnh điều kiện",
      align: "center",
      dataIndex: "imgProviso",
      width: 300,
      render: (value, record, index) => (
        <div className="w-full flex justify-center">
          <img
            className="mb-2 object-contain"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
            }}
            src={value}
            alt={`hình ${index}`}
          />
        </div>
      ),
    },
    {
      title: "Hình ảnh thủ tục",
      align: "center",
      dataIndex: "imgProcedure",
      width: 300,
      render: (value, record, index) => (
        <div className="w-full flex justify-center">
          <img
            className="mb-2 object-contain"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
            }}
            src={value}
            alt={`hình ${index}`}
          />
        </div>
      ),
    },
    {
      title: "Hành động",
      width: 150,
      render: (value, record, index) => (
        <div>
          <Button
            block
            onClick={() => {
              navigate(`/dashboard/loanguide/detail/${record?.id}`);
            }}
            className="mb-2"
          >
            Chi tiết
          </Button>
          <Button
            block
            danger
            onClick={() =>
              Swal.fire({
                title: `Bạn muốn xóa`,
                text: value.name,
                showCancelButton: true,
                confirmButtonColor: "#fb4226",
                cancelButtonColor: "rgb(167 167 167)",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  onDelete(record?.id);
                }
              })
            }
          >
            Xóa
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

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Thủ Tục
      </h1>
      <Button
        className="mb-2"
        onClick={() => navigate("/dashboard/loanguide/add")}
      >
        Thêm
      </Button>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        dataSource={list}
        onChange={onChange}
        bordered
        scroll={{ x: 800 }}
      />
    </div>
  );
};

export default LoanGuide;
