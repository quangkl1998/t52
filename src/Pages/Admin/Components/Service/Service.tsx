import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Form, Input, Modal, Table } from "antd";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { getList } from "Slices/service";
const Service = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [editFormValue, SetEditFormValue] = useState<any>();

  const [showEdit, SetShowEdit] = useState(false);

  const { list } = useSelector((state: RootState) => state.service);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const onDelete = (id: string) => {};

  const onEdit = (values: any) => {};

  const columns: ColumnsType<any> = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "img",
    },
    {
      title: "ACTION",
      width: 150,
      render: (value, record, index) => (
        <div>
          <Button block onClick={() => {}} className="mb-2">
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

  interface EditFromProps {
    showEdit: boolean;
    onEdit: (values: any) => void;
    onCancelEdit: () => void;
  }

  const EditFrom: React.FC<EditFromProps> = ({
    showEdit,
    onEdit,
    onCancelEdit,
  }) => {
    const [form] = Form.useForm();

    return (
      <Modal
        open={showEdit}
        title="Sửa Câu Hỏi"
        okText="Sửa"
        cancelText="Hủy"
        onCancel={onCancelEdit}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onEdit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: "public" }}
        ></Form>
      </Modal>
    );
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Câu Hỏi
      </h1>
      <Button
        className="mb-2"
        onClick={() => navigate("/dashboard/service/addservice")}
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

      <EditFrom
        showEdit={showEdit}
        onEdit={onEdit}
        onCancelEdit={() => {
          SetShowEdit(false);
        }}
      />
    </div>
  );
};

export default Service;
