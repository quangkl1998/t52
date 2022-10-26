import { useEffect, useState } from "react";

import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import {
  addTagNews,
  deleteTagNews,
  getTagNewsList,
  updateTagNews,
} from "Slices/TagNewsAdmin";

import { ColumnsType, TableProps } from "antd/es/table";
import { Button, Form, Input, Modal, Table } from "antd";

import Swal from "sweetalert2";

const Tagnews = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { tag } = useSelector((state: RootState) => state.tagNewsAdmin);

  const [visible, setVisible] = useState(false);

  const [idTag, SetIdTag] = useState("");

  const [showEdit, SetShowEdit] = useState(false);

  useEffect(() => {
    dispatch(getTagNewsList());
  }, [dispatch]);

  const onDelete = (id: string) => {
    dispatch(deleteTagNews(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfuly") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getTagNewsList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const onCreate = (values: any) => {
    dispatch(addTagNews(values))
      .unwrap()
      .then((result) => {
        if (result.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          dispatch(getTagNewsList());
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
    dispatch(updateTagNews(dataEdit))
      .unwrap()
      .then((result) => {
        if (result === "Update successfuly") {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          dispatch(getTagNewsList());
          SetShowEdit(false);
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  const columns: ColumnsType<any> = [
    {
      dataIndex: "name",
      title: "Tên Tag",
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
        title="Thêm TAG"
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
            label="Tên Tag"
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

    return (
      <Modal
        open={showEdit}
        title="Sửa Partner"
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
            label="Tên Tag"
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
      <Button className="mb-2" onClick={() => setVisible(true)}>
        Thêm
      </Button>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        onChange={onChange}
        dataSource={tag}
        bordered
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
        }}
      />
    </div>
  );
};

export default Tagnews;
