import React, { useEffect, useState } from "react";

import { Button, Table, Input, Row, Col, Tag } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";

import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";

import { deleteNews, getNewsList } from "Slices/NewsAdmin";

import Swal from "sweetalert2";
import { getTagNewsList } from "Slices/TagNewsAdmin";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const { Search } = Input;

const News = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [q, setQ] = useState("");

  let navigate = useNavigate();

  const { newsList } = useSelector((state: RootState) => state.newsAdmin);

  const fSearch = (rows: any[]) => {
    return rows?.filter((row) => row?.name?.toLowerCase().indexOf(q) > -1);
  };

  useEffect(() => {
    dispatch(getNewsList());
    dispatch(getTagNewsList());
  }, [dispatch]);

  const DeleteNews = (id: string) => {
    dispatch(deleteNews(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfully") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getNewsList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value?.toLowerCase());
  };

  const columns: ColumnsType<any> = [
    {
      title: "Tiêu đề",
      dataIndex: "name",
      width: 300,
    },

    {
      title: "Banner",
      align: "center",

      dataIndex: "img",
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
      title: "Tags",
      dataIndex: "typenews",
      width: 300,
      render: (value, record, index) => (
        <>
          {value?.map((e: any) => (
            <Tag key={e?.id}>{e?.name}</Tag>
          ))}
        </>
      ),
    },
    {
      title: "ACTION",
      width: 150,
      render: (value, record, index) => (
        <div>
          <Button
            block
            onClick={() => {
              navigate(`/dashboard/newslist/newdetail/${record?.slug}`, {
                replace: true,
              });
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
                  DeleteNews(record?.id);
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

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Tin Tức
      </h1>

      <Row>
        <Col lg={{ span: 6 }} md={{ span: 8 }} className="mb-2">
          <div className="flex-row md:flex">
            <Search
              className="mb-2 text-red"
              placeholder="Tìm theo tiêu đề"
              onChange={handleSearch}
            />
            <Button>
              <NavLink to={"addnews"}>Thêm</NavLink>
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        dataSource={fSearch(newsList)}
        onChange={onChange}
        scroll={{ x: 800 }}
        bordered
      />
    </div>
  );
};

export default News;
