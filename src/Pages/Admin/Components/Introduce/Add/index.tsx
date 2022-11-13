import { useRef, useState } from "react";

import JoditEditor from "jodit-react";
import { Button, Form, Input, Upload, UploadProps } from "antd";
import { AppDispatch } from "configStore";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { add } from "Slices/introduce";

const Add = () => {
  const dispatch = useDispatch<AppDispatch>();

  let navigate = useNavigate();

  const editor = useRef(null);

  const [content, SetContent] = useState("");

  const onCreate = (data: any) => {
    const newsData = {
      ...data,
      content: content,
    };
    dispatch(add(newsData))
      .unwrap()
      .then((result) => {
        if (result?.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          navigate("/dashboard/introduce", { replace: true });
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

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
      <h1 className="text-center text-4xl text-red-500 ">Thêm Giới Thiệu</h1>
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
          <Button type="primary" className="mt-2" danger htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Add;
