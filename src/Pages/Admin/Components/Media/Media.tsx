import { useEffect, useState } from "react";

import { Button, Form, Input, Modal, Table } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";

import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";

import {
  addMediaAdmin,
  deleteMediaAdmin,
  getMediaAdminList,
  updateMediaAdmin,
} from "Slices/mediaAdmin";

import Swal from "sweetalert2";

const Media = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { media } = useSelector((state: RootState) => state.mediaAdmin);

  const [visible, setVisible] = useState(false);

  const [dataMedia, SetDataMedia] = useState<any>();

  const [idMedia, SetIdMedia] = useState("");

  const [showEdit, SetShowEdit] = useState(false);

  useEffect(() => {
    dispatch(getMediaAdminList());
  }, []);

  const onDelete = (id: string) => {
    dispatch(deleteMediaAdmin(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfully") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getMediaAdminList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const onCreate = (values: any) => {
    dispatch(addMediaAdmin(values))
      .unwrap()
      .then((result) => {
        if (result.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          dispatch(getMediaAdminList());
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
      id: idMedia,
    };
    dispatch(updateMediaAdmin(dataEdit))
      .unwrap()
      .then((result) => {
        if (result) {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          dispatch(getMediaAdminList());
          SetShowEdit(false);
          SetDataMedia(undefined);
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
      title: "Tên Video",
    },
    {
      dataIndex: "urlVideo",
      title: "ID Video Youtube",
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
              SetIdMedia(record?.id);
              SetDataMedia(record);
              // console.log(dataMedia, "s");
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
        title="Thêm Media"
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
            label="Tên Video"
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
            name="urlVideo"
            label="id Video"
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
    if (dataMedia) {
      form.setFieldsValue({
        name: dataMedia?.name,
        urlVideo: dataMedia?.urlVideo,
      });
    }
    return (
      <Modal
        open={showEdit}
        title="Sửa Video"
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
            label="Tên Video"
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
            name="urlVideo"
            label="ID Video"
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
        Danh Sách Video
      </h1>
      <Button className="mb-2" onClick={() => setVisible(true)}>
        Thêm
      </Button>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        onChange={onChange}
        scroll={{ x: 800 }}
        dataSource={media}
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
          SetDataMedia(undefined);
        }}
      />
    </div>
  );
};

export default Media;
