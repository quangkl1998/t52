import { useEffect, useState } from "react";

import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";

import { ColumnsType, TableProps } from "antd/es/table";
import { Button, Form, Input, Modal, Table } from "antd";

import Swal from "sweetalert2";
import {
  addManagerAdmin,
  deleteManagerAdmin,
  getManagerList,
  updateManagerAdmin,
} from "Slices/Login";

const ManagerList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { managers } = useSelector((state: RootState) => state.login);

  const [visible, setVisible] = useState(false);

  const [dataManager, SetDataManager] = useState<any>();

  const [idTag, SetIdTag] = useState("");

  const [showEdit, SetShowEdit] = useState(false);

  useEffect(() => {
    dispatch(getManagerList());
  }, []);

  const onDelete = (id: string) => {
    dispatch(deleteManagerAdmin(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfully") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getManagerList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const onCreate = (values: any) => {
    dispatch(addManagerAdmin(values))
      .unwrap()
      .then((result) => {
        if (result.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          dispatch(getManagerList());
          setVisible(false);
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

  const onEdit = (values: any) => {
    let dataEdit = {
      ...values,
      id: idTag,
    };
    dispatch(updateManagerAdmin(dataEdit))
      .unwrap()
      .then((result) => {
        if (result === "Update successfully") {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          dispatch(getManagerList());
          SetShowEdit(false);
          SetDataManager(undefined);
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  const columns: ColumnsType<any> = [
    {
      dataIndex: "account",
      title: "Tài khoản",
      width: 100,
    },
    {
      dataIndex: "name",
      title: "Tên Người Dùng",
      width: 100,
    },
    {
      dataIndex: "email",
      title: "Email",
      width: 100,
    },
    {
      dataIndex: "phone",
      title: "Số Điện Thoại",
      width: 100,
    },
    {
      title: "ACTION",
      align: "center",
      width: 200,
      render: (value, record, index) => (
        <div>
          <Button
            className="mr-2"
            onClick={() => {
              SetShowEdit(true);
              SetIdTag(record?.id);
              SetDataManager(record);
            }}
          >
            Sửa
          </Button>
          <Button
            danger
            onClick={() => {
              Swal.fire({
                title: `Bạn muốn xóa Tag`,
                text: value.name,
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
        title="Thêm Manager"
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
            label="Tên Người Dùng"
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
            name="account"
            label="Tài Khoản"
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
            name="email"
            label="Email"
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
            name="password"
            label="Mật Khẩu"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số Điện Thoại"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    );
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
    if (dataManager) {
      form.setFieldsValue({
        name: dataManager?.name,
        account: dataManager?.account,
        email: dataManager?.email,
        phone: dataManager?.phone,
      });
    }
    return (
      <Modal
        open={showEdit}
        title="Sửa Manager"
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
        >
          <Form.Item
            name="name"
            label="Tên Người Dùng"
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
            name="account"
            label="Tài Khoản"
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
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Mật Khẩu">
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số Điện Thoại"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Tài Khoản
      </h1>
      <Button className="mb-2" onClick={() => setVisible(true)}>
        Thêm
      </Button>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        onChange={onChange}
        dataSource={managers}
        bordered
        scroll={{ x: 800 }}
      />
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <EditFrom
        showEdit={showEdit}
        onEdit={onEdit}
        onCancelEdit={() => {
          SetShowEdit(false);
          SetDataManager(undefined);
        }}
      />
    </div>
  );
};

export default ManagerList;
