import { Button, Form, Input, Select } from "antd";
import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addClient } from "Slices/ClientAdmin";
import { getStoreList } from "Slices/StoreAdmin";
import Swal from "sweetalert2";

const { Option } = Select;

const AddClient = () => {
    const dispatch = useDispatch<AppDispatch>();

    let navigate = useNavigate();

    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onCreate = (data: any) => {
        dispatch(addClient(data))
            .unwrap()
            .then((result) => {
                if (result.id) {
                    Swal.fire({
                        title: `Thêm thành công`,
                    });
                    navigate("/dashboard/client", { replace: true });
                } else {
                    Swal.fire({
                        title: `Thêm thất bại`,
                    });
                }
            });
    };

    useEffect(() => {
        dispatch(getStoreList());
    }, [dispatch]);

    const { stores } = useSelector((state: RootState) => state.storeAdmin);

    return (
        <div>
            <h1 className="text-center text-4xl text-red-500 ">
                Thêm Người Vay
            </h1>
            <Form {...layout} form={form} onFinish={onCreate}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <Form.Item
                        name={"name"}
                        label="Tên Khách hàng"
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
                        name={"address"}
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
                        name={"email"}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Không được bỏ trống mục này",
                            },
                        ]}
                    >
                        <Input type="email"></Input>
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
                        name={"loanType"}
                        label="Hình thức vay"
                        rules={[
                            {
                                required: true,
                                message: "Không được bỏ trống mục này",
                            },
                        ]}
                    >
                        <Select placeholder="Hình thức vay">
                            <Option value="Đăng ký xe máy">
                                Đăng ký xe máy
                            </Option>
                            <Option value="Đăng ký ô tô">Đăng ký ô tô</Option>
                            <Option value="Ô tô">Ô tô</Option>
                            <Option value="Xe máy">Xe máy</Option>
                            <Option value="Tài sản khác">Tài sản khác</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="isLoan"
                        label="Trạng thái"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Không được bỏ trống mục này",
                            },
                        ]}
                    >
                        <Select placeholder="Trạng thái khách hàng">
                            <Option value={true}>Đã vay</Option>
                            <Option value={false}>Chưa vay</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Địa Chỉ"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Không được bỏ trống mục này",
                            },
                        ]}
                    >
                        <Input />
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

export default AddClient;
