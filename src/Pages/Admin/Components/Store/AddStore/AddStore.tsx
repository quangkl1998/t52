import { Button, Form, Input, Select } from "antd";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStore } from "Slices/StoreAdmin";
import Swal from "sweetalert2";
import { getList as getProvince } from "Slices/province";
import { getByIdProvince, getList as getDistrict } from "Slices/district";
import { useEffect } from "react";

const { Option } = Select;
const AddStore = () => {
  const dispatch = useDispatch<AppDispatch>();

  let navigate = useNavigate();

  const { list: ListProvince } = useSelector(
    (state: RootState) => state.province,
  );

  const { list: ListDistrict } = useSelector(
    (state: RootState) => state.district,
  );

  const onChooseProvince = (id: string) => {
    dispatch(getByIdProvince(id));
  };

  useEffect(() => {
    dispatch(getProvince());
    dispatch(getDistrict());
  }, [dispatch]);

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onCreate = (data: any) => {
    dispatch(addStore(data))
      .unwrap()
      .then((result) => {
        if (result.id) {
          Swal.fire({
            title: `Thêm thành công`,
          });
          navigate("/dashboard/store", { replace: true });
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-red-500 ">Thêm Cửa Hàng</h1>
      <Form {...layout} form={form} onFinish={onCreate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Form.Item
            name={"name"}
            label="Tên cửa hàng"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
              { type: "email", message: "Không đúng định dạng" },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
              {
                pattern:
                  /^(0?)([1-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{8}$/,
                message: "Không đúng định dạng",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name={"street"}
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
            ]}
          >
            <Input></Input>
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
            <Select onChange={(e) => onChooseProvince(e)}>
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
              {ListDistrict.map((e) => {
                return (
                  <Option key={e.id} value={e.id}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name={"idMap"}
            label="Link map"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
        </div>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddStore;
