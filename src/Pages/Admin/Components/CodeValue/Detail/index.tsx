import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getById, updateCoreValue } from "Slices/corevalue";
import Swal from "sweetalert2";
import { Button, Form, Input } from "antd";
import JoditEditor from "jodit-react";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { detail } = useSelector((state: RootState) => state.corevalue);

  let navigate = useNavigate();

  const editor = useRef(null);

  const [content, SetContent] = useState("");

  useEffect(() => {
    if (detail) {
      SetContent(detail?.content);
    }
  }, [detail]);

  useEffect(() => {
    dispatch(getById(id!));
  }, [id]);

  const onCreate = (data: any) => {
    const newsData = {
      ...data,
      content: content,
      id: detail?.id,
    };

    dispatch(updateCoreValue(newsData))
      .unwrap()
      .then((result) => {
        if (result === "Update successfully") {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          navigate("/dashboard/corevalue", { replace: true });
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  const config: any = {
    readonly: false,
    removeButtons: ["subscript", "superscript", "file", "video"],
  };

  const [form] = Form.useForm();
  if (detail) {
    form.setFieldsValue({
      title: detail?.title,
      content: content,
    });
  }
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
            name="title"
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
          <Button type="primary" className="mt-2" danger htmlType="submit">
            Sửa
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Detail;
