import { Button, Form, Input, Select } from "antd";
import { AppDispatch, RootState } from "configStore";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById, update } from "Slices/submenu";
import Swal from "sweetalert2";

import JoditEditor from "jodit-react";
import { useParams } from "react-router-dom";

const { Option } = Select;

const SubMenuDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const editor = useRef(null);

  const [content, SetContent] = useState("");

  const [menutype, setMenutype] = useState("");

  const { detail } = useSelector((state: RootState) => state.submenu);

  useEffect(() => {
    if (detail) {
      SetContent(detail?.content);
      setMenutype(detail?.type);
    }
  }, [detail]);

  useEffect(() => {
    dispatch(getById(id!));
  }, [id]);

  const onCreate = (values: any) => {
    const data = {
      ...values,
      content: content,
      id: id,
    };
    dispatch(update(data))
      .unwrap()
      .then((result) => {
        if (result === "Update successfully") {
          Swal.fire({
            title: `Cập nhật thành công`,
          });
          dispatch(getById(id!));
        } else {
          Swal.fire({
            title: `Cập nhật thất bại`,
          });
        }
      });
  };

  const onTypeChange = (e: any) => {
    console.log(e, "e");
    setMenutype(e);
  };

  const [form] = Form.useForm();
  useEffect(() => {
    if (detail) {
      form.setFieldsValue({
        name: detail?.name,
        content: content,
        id: detail?.id,
        type: menutype,
        url: detail?.url,
      });
    }
  }, [content, form, detail, menutype]);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const config: any = {
    readonly: false,
    removeButtons: ["subscript", "superscript", "file", "video"],
  };

  const handleChange = (e: any) => {
    // console.log(e);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Thông Tin Mục
      </h1>
      <Form {...layout} form={form} onFinish={onCreate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Form.Item
            name="name"
            label="Tên mục"
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
            name="type"
            label="Loại mục"
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
        </div>
        {menutype === "trang" ? (
          <div>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={(e) => SetContent(e)}
              onChange={handleChange}
            />
          </div>
        ) : (
          ""
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit" className="mt-2">
            Sửa
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SubMenuDetail;
