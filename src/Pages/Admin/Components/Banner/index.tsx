import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Form, Input, Modal, Table, Upload, UploadProps } from "antd";
import Swal from "sweetalert2";
import { add, deleteList, getBanner, update } from "Slices/banner";
const BannerList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [visible, setVisible] = useState(false);

  const [bannerdetail, setBannerDetail] = useState<any>();

  const [showEdit, SetShowEdit] = useState(false);

  const [idPartner, SetIdPartner] = useState("");

  const { listBanner } = useSelector((state: RootState) => state.banner);

  const props: UploadProps = {
    beforeUpload: (file) => {
      return false;
    },
  };

  const normFile = (e: UploadProps) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const onCreate = (values: any) => {
    const data = {
      ...values,
    };
    dispatch(add(data))
      .unwrap()
      .then((result) => {
        if (result.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          dispatch(getBanner());
          setVisible(false);
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

  const onDelete = (id: string) => {
    dispatch(deleteList(id))
      .unwrap()
      .then((result) => {
        if ((result = "Delete successfuly")) {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getBanner());
          setVisible(false);
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const onEdit = (values: any) => {
    let dataEdit = {
      ...values,
      id: idPartner,
    };
    dispatch(update(dataEdit))
      .unwrap()
      .then((result) => {
        if (result === "Update successfuly") {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          SetShowEdit(false);
          dispatch(getBanner());
          setBannerDetail(undefined);
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  const columns: ColumnsType<any> = [
    {
      title: "Tên Banner",
      dataIndex: "name",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "img",
      width: 300,
      render: (value, record, index) => (
        <img
          className="mb-2"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
          src={value}
          alt={`hình ${index}`}
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
            className="mb-2"
            onClick={() => {
              SetShowEdit(true);
              SetIdPartner(record?.id);
              setBannerDetail(record);
            }}
          >
            Sửa
          </Button>
          <Button
            block
            danger
            onClick={() => {
              Swal.fire({
                title: `Bạn muốn xóa banner`,
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
        title="Thêm Banner"
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
            label="Tên banner"
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
            name="img"
            label="Hình ảnh"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Upload {...props} listType="picture">
              <Button>Upload ảnh</Button>
            </Upload>
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
    if (bannerdetail) {
      form.setFieldsValue({
        name: bannerdetail?.name,
      });
    }
    return (
      <Modal
        open={showEdit}
        title="Sửa Banner"
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
            label="Tên banner"
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
            name="img"
            label="Hình ảnh"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload {...props} listType="picture">
              <Button>Upload ảnh</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Banner
      </h1>
      <Button className="mb-2" onClick={() => setVisible(true)}>
        Thêm
      </Button>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        dataSource={listBanner}
        onChange={onChange}
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
          setBannerDetail(undefined);
        }}
      />
    </div>
  );
};

export default BannerList;
