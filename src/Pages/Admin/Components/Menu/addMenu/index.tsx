import { Form, Input, Select, Switch } from "antd";
import { AppDispatch } from "configStore";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "Slices/menu";
import Swal from "sweetalert2";
import SubMenu from "../submenu";

const { Option } = Select;

const AddMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [menutype, setMenutype] = useState("");

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
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

  const onTypeChange = (e: any) => {
    setMenutype(e);
  };

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <div>
      <Form {...layout} form={form} onFinish={onCreate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
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
          <Form.Item name="isActive" label="Hiển thị" valuePropName="checked">
            <Switch />
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
            <Select onChange={(e) => onTypeChange(e)}>
              <Option value={"link"}>{"Link"}</Option>
              <Option value={"trang"}>{"Trang"}</Option>
              <Option value={"thong-bao"}>{"Thông báo"}</Option>
            </Select>
          </Form.Item>
          {menutype === "link" ? (
            <Form.Item
              name="url"
              label="Link"
              rules={[
                {
                  required: true,
                  message: "Không được bỏ trống",
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : (
            ""
          )}
          <Form.Item>
            <SubMenu></SubMenu>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddMenu;
