import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Form, Input, Modal, Select, Switch, Table } from "antd";
import Swal from "sweetalert2";
import { add, deleteItem, getList, update } from "Slices/menu";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Menu = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [visible, setVisible] = useState(false);

  const { list } = useSelector((state: RootState) => state.menu);

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const onCreate = (values: any) => {
    const data = {
      ...values,
    };
    dispatch(add(data))
      .unwrap()
      .then((result) => {
        if (result?.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          dispatch(getList());
          setVisible(false);
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

  const onDelete = (id: string) => {
    dispatch(deleteItem(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfully") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getList());
          setVisible(false);
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const OnActive = (data: any) => {
    let dataEdit = {
      ...data,
      isActive: !data.isActive,
    };
    dispatch(update(dataEdit))
      .unwrap()
      .then((result) => {
        if (result === "Update successfully") {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          dispatch(getList());
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  const columns: ColumnsType<any> = [
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "Loại",
      dataIndex: "type",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      align: "center",
      width: 300,
      render: (value, record, index) => (
        <Switch
          checked={value}
          onClick={() => {
            OnActive(record);
          }}
        />
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
            danger
            className="mb-2"
            onClick={() => {
              Swal.fire({
                title: `Bạn muốn xóa Menu`,
                text: value?.name,
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
          <Button
            block
            onClick={() =>
              navigate(`/dashboard/menu/detail/${record?.id}`, {
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

  interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: any) => void;
    onCancel: () => void;
  }

  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();

    return (
      <Modal
        open={visible}
        title="Thêm Menu"
        okText="Thêm"
        cancelText="Hủy"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
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
        >
          <Form.Item
            name="name"
            label="Menu Name"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Loại Menu"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Select>
              <Option value={"link"}>{"Link"}</Option>
              <Option value={"trang"}>{"Trang"}</Option>
              <Option value={"thong-bao"}>{"Thông báo"}</Option>
            </Select>
          </Form.Item>
          <Form.Item name="isActive" label="Active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Menu
      </h1>
      <Button
        className="mb-2"
        onClick={() =>
          /* navigate("/dashboard/menu/addmenu", {
              replace: true,
            }) */ setVisible(true)
        }
      >
        Thêm
      </Button>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        dataSource={list}
        onChange={onChange}
        scroll={{ x: 800 }}
        bordered
      />
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default Menu;
