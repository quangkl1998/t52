import { Button, Form, Input, Select } from "antd";
import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "Slices/StoreAdmin";
import Swal from "sweetalert2";
import { getList as getProvince } from "Slices/province";
import { getByIdProvince } from "Slices/district";
import { useNavigate } from "react-router-dom";
const { Option } = Select;
const Detail = ({ data, idStore }: any) => {
  let navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { list: ListProvince } = useSelector(
    (state: RootState) => state.province,
  );

  const [form] = Form.useForm();
  const { list: ListDistict } = useSelector(
    (state: RootState) => state.district,
  );
  useEffect(() => {
    dispatch(getProvince());
  }, [dispatch]);

  useEffect(() => {
    if (data?.district?.province?.id) {
      dispatch(getByIdProvince(data?.district?.province?.id));
    }
  }, [data]);

  const onChangeProvince = (e: any) => {
    dispatch(getByIdProvince(e));
    form.setFieldsValue({
      districtId: "",
    });
  };

  const onCreate = (values: any) => {
    dispatch(updateStore(values))
      .unwrap()
      .then((result: any) => {
        if (result === "Update successfuly") {
          Swal.fire({
            title: `Sửa thành công`,
          });
          navigate("/dashboard/store", { replace: true });
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        id: idStore,
        name: data?.name,
        street: data?.street,
        districtId: data?.district?.id,
        provinceId: data?.district?.province?.id,
        email: data?.email,
        phone: data?.phone,
        idMap: data?.idMap,
      });
    }
  }, [data, form, idStore]);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Form form={form} {...layout} onFinish={onCreate}>
      <Form.Item
        className="hidden"
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
        name="provinceId"
        label="Tỉnh/Thành"
        rules={[
          {
            required: true,
            message: "Không được bỏ trống",
          },
        ]}
      >
        <Select onChange={onChangeProvince}>
          {ListProvince.map((e) => {
            return (
              <Option key={e.id} value={e.id}>
                {e.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name={"districtId"}
        label="Quận/Huyện"
        rules={[
          {
            required: true,
            message: "Không được bỏ trống mục này",
          },
        ]}
      >
        <Select>
          {ListDistict?.map((e: any) => {
            return (
              <Option key={e.id} value={e.id}>
                {e.name}
              </Option>
            );
          })}
        </Select>
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
      <Form.Item
        name="idMap"
        label="Link Map"
        rules={[
          {
            required: true,
            message: "Không được bỏ trống",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" danger htmlType="submit">
          Sửa
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Detail;
