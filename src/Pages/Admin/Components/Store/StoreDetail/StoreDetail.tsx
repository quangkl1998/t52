import { Button, Form, Input, Modal } from "antd";
import { AppDispatch, RootState } from "configStore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailStore, updateStore } from "Slices/StoreAdmin";
import Swal from "sweetalert2";

const StoreDetail = () => {
  const { idStore } = useParams();

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDetailStore(idStore!));
  }, [dispatch, idStore]);

  const { storesDetail } = useSelector((state: RootState) => state.storeAdmin);

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

    form.setFieldsValue({
      id: idStore,
      name: storesDetail?.name,
      street: storesDetail?.street,
      district: storesDetail?.district,
      province: storesDetail?.province,
      email: storesDetail?.email,
      phone: storesDetail?.phone,
      idMap: storesDetail?.idMap,
    });

    return (
      <Modal
        open={visible}
        title="Cửa Hàng"
        okText="Sửa"
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
            name="id"
            label="ID"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên cửa hàng"
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
            name="street"
            label="Địa chỉ"
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
            name="district"
            label="Quận"
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
            name="province"
            label="TỈnh/Thành Phố"
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
            name="phone"
            label="Số điện thoại"
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

  const onCreate = (values: any) => {
    dispatch(updateStore(values))
      .unwrap()
      .then((result: any) => {
        if (result === "Update successfuly") {
          Swal.fire({
            title: `Sửa thành công`,
          });
          dispatch(getDetailStore(idStore!));
          setVisible(false);
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        {storesDetail?.name}
      </h1>
      <Button
        danger
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Sửa
      </Button>
      <div className="container mx-auto p-5">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <p>Địa chỉ: {storesDetail?.street}</p>
            <p>Quận: {storesDetail?.district}</p>
            <p>TỈnh/Thành Phố: {storesDetail?.province}</p>
            <p>Email: {storesDetail?.email}</p>
            <p>Số điện thoại: {storesDetail?.phone}</p>
          </div>
          <div>
            <iframe
              src={storesDetail?.idMap}
              className="w-96 h-96 rounded-lg"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
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

export default StoreDetail;
