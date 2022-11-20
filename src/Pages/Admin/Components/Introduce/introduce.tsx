import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Table } from "antd";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { deleteItem, getList } from "Slices/introduce";
const Introduce = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { list } = useSelector((state: RootState) => state.introduce);
  useEffect(() => {
    dispatch(getList());
  }, []);

  const onDelete = (id: string) => {
    dispatch(deleteItem(id))
      .unwrap()
      .then((result) => {
        if ((result = "Delete successfuly")) {
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
      title: "Tiêu đề",
      dataIndex: "title",
    },
    {
      title: "Hình ảnh",
      align: "center",
      dataIndex: "img",
      width: 300,
      render: (value, record, index) => (
        <div className="w-full flex justify-center">
          <img
            className="mb-2"
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
      title: "ACTION",
      align: "center",
      width: 200,
      render: (value, record, index) => (
        <div>
          <Button
            block
            className="mb-2"
            onClick={() => {
              navigate(`/dashboard/introduce/detail/${record?.id}`, {
                replace: true,
              });
            }}
          >
            Chi tiết
          </Button>
          <Button
            block
            danger
            onClick={() => {
              Swal.fire({
                title: `Bạn muốn xóa Introduce`,
                text: value?.title,
                showCancelButton: true,
                confirmButtonColor: "#fb4226",
                cancelButtonColor: "rgb(167 167 167)",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  onDelete(value?.id);
                }
              });
            }}
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
        Danh Sách Giới Thiệu
      </h1>
      <Button
        className="mb-2"
        onClick={() => navigate("/dashboard/introduce/addintroduce")}
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

export default Introduce;
