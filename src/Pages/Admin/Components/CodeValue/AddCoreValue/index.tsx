import { useRef, useState } from "react";

import JoditEditor from "jodit-react";
import { Button, Form, Input } from "antd";
import { AppDispatch } from "configStore";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addCoreValue } from "Slices/corevalue";

const AddCoreValue = () => {
  const dispatch = useDispatch<AppDispatch>();

  let navigate = useNavigate();

  const editor = useRef(null);

  const [content, SetContent] = useState("");

  const onCreate = (data: any) => {
    const newsData = {
      ...data,
      content: content,
    };
    dispatch(addCoreValue(newsData))
      .unwrap()
      .then((result) => {
        if (result?.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          navigate("/dashboard/corevalue", { replace: true });
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

  const config: any = {
    readonly: false,
    removeButtons: ["subscript", "superscript", "file", "video"],
  };

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const handleChange = (e: any) => {
    // console.log(e);
  };
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl text-red-500 ">
        Thêm Giá Trị Cốt Lõi
      </h1>
      <Form {...layout} form={form} onFinish={onCreate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Form.Item
            name={"title"}
            label="Tiêu đề"
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
        <div className="relative">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(e) => SetContent(e)}
            onChange={handleChange}
          />
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

export default AddCoreValue;
