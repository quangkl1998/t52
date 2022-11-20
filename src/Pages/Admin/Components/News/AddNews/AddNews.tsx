import { useEffect, useRef, useState } from "react";

import JoditEditor from "jodit-react";
import { Button, Form, Input, Modal, Select, Upload, UploadProps } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { addNews, uploadImage } from "Slices/NewsAdmin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getTagNewsList } from "Slices/TagNewsAdmin";
import { getList as getMenuList } from "Slices/menu";

const { Option } = Select;

const AddNews = () => {
    const dispatch = useDispatch<AppDispatch>();

    let navigate = useNavigate();

    const editor = useRef(null);

    const [content, SetContent] = useState("");

    const [open, SetOpen] = useState(false);
    const [imgContent, SetImgContent] = useState<any>([]);

    const [subMenuList, setSubMenuList] = useState([]);

    const { tag } = useSelector((state: RootState) => state.tagNewsAdmin);
    const { list } = useSelector((state: RootState) => state.menu);

    useEffect(() => {
        dispatch(getTagNewsList());
        dispatch(getMenuList());
    }, [dispatch]);

    const onCreate = (data: any) => {
        const newsData = {
            ...data,
            content: content,
            contentImg: imgContent,
        };
        dispatch(addNews(newsData))
            .unwrap()
            .then((result) => {
                if (result?.id) {
                    Swal.fire({
                        title: `Thêm Thành công`,
                    });
                    navigate("/dashboard/newslist", { replace: true });
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
                    SetContent(
                        content + `<img src='${result?.img}' alt="img" />`,
                    );
                    // console.log(contentImage);

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
                    form.validateFields()
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

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const handleChange = (e: any) => {
        // console.log(e);
    };
    return (
        <div className="w-full">
            <h1 className="text-center text-4xl text-red-500 ">Thêm Tin Tức</h1>
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
                        <Select>
                            {list.map((e) => {
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
                        label="Banner"
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
                        Thêm
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

export default AddNews;
