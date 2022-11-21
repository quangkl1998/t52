import { useEffect, useRef, useState } from "react";

import JoditEditor from "jodit-react";
import { Button, Form, Input, Modal, Select, Upload, UploadProps } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { updateNews, uploadImage } from "Slices/NewsAdmin";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { getTagNewsList } from "Slices/TagNewsAdmin";
import { getNewDetail } from "Slices/news";
import { getById, getList } from "Slices/menu";

const { Option } = Select;

const NewsDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  let navigate = useNavigate();

  const editor = useRef(null);

  const [content, SetContent] = useState("");

  const [open, SetOpen] = useState(false);

  const [imgContent, SetImgContent] = useState<any>([]);

  const [subMenuList, setSubMenuList] = useState<any>([]);

  const { tag } = useSelector((state: RootState) => state.tagNewsAdmin);

  const { newsDetail } = useSelector((state: RootState) => state.news);

  const { list, detail } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    if (newsDetail) {
      SetContent(newsDetail?.content);
    }
  }, [newsDetail]);

  useEffect(() => {
    dispatch(getNewDetail(slug!));
    dispatch(getTagNewsList());
    dispatch(getList());
  }, [dispatch, slug]);

  const onChangeMenu = (e: any) => {
    dispatch(getById(e));
    form.setFieldsValue({
      submenuId: "",
    });
  };

  const onCreate = (data: any) => {
    const newsData = {
      ...data,
      content: content,
      contentImg: imgContent,
      id: newsDetail?.id,
    };
    dispatch(updateNews(newsData))
      .unwrap()
      .then((result) => {
        if (result === "Update successfuly") {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          navigate("/dashboard/newslist", { replace: true });
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

  const handleSubmit = (values: any) => {
    const data = {
      ...values,
    };

    dispatch(uploadImage(data))
      .unwrap()
      .then((result) => {
        if (result?.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          SetContent(content + `<img src='${result?.img}' alt="img" />`);
          SetImgContent([...imgContent, result?.img]);
          SetOpen(false);
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };

  //form Upload

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

  interface CollectionCreateFormProps {
    open: boolean;
    handleSubmit: (values: any) => void;
    onCancel: () => void;
  }

  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    handleSubmit,
    onCancel,
  }) => {
    const [form] = Form.useForm();

    return (
      <Modal
        open={open}
        title="Upload Ảnh"
        okText="Upload"
        cancelText="Hủy"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              handleSubmit(values);
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

  //endForm Upload

  const [form] = Form.useForm();
  useEffect(() => {
    if (newsDetail) {
      const types: any[] = [];
      newsDetail?.typenews?.map((e: any) => types.push(e?.name));
      form.setFieldsValue({
        name: newsDetail?.name,
        descript: newsDetail?.descript,
        content: content,
        id: newsDetail?.id,
        type: types,
        menuId: newsDetail?.menuId,
        submenuId: newsDetail?.submenuId,
      });
    }
  }, [form, newsDetail]);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const handleChange = (e: any) => {
    // console.log(e);
  };
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl text-red-500 ">Chi tiết Tin Tức</h1>
      <Form {...layout} form={form} onFinish={onCreate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Form.Item
            name={"name"}
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
            name={"descript"}
            label="Mô tả"
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
            name={"menuId"}
            label="Menu"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
            ]}
          >
            <Select onChange={(e) => onChangeMenu(e)}>
              {list.map((e: any) => {
                return (
                  <Option key={e.id} value={e.id}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name={"submenuId"}
            label="Mục"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
            ]}
          >
            <Select>
              {detail?.submenus?.map((e: any) => {
                return (
                  <Option key={e.id} value={e.id}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="img"
            label="Banner Mới"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload {...props} listType="picture">
              <Button>Upload ảnh</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="type"
            label="Loại Tin"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Không được bỏ trống mục này",
              },
            ]}
          >
            <Select mode="multiple">
              {tag.map((e) => {
                return (
                  <Option key={e.id} value={e.id}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="Banner">
            <img src={newsDetail?.img} alt={newsDetail?.img} />
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
          <div
            className="mb-2 absolute md:top-[5px] top-[40px] right-[50px] md:right-[150px]  xl:right-[50px] cursor-pointer"
            onClick={() => SetOpen(true)}
          >
            <FileImageOutlined />
          </div>
        </div>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            Sửa
          </Button>
        </Form.Item>
      </Form>
      <CollectionCreateForm
        open={open}
        handleSubmit={handleSubmit}
        onCancel={() => {
          SetOpen(false);
        }}
      />
    </div>
  );
};

export default NewsDetail;
