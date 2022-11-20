import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { AppDispatch, RootState } from "configStore";

// import {
//   deleteClient,
//   getClientList,
//   updateClient,
// } from "Pages/Admin/Slices/Client";

import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Table,
  TableProps,
} from "antd";

import Swal from "sweetalert2";
import { deleteClient, getClientList, updateClient } from "Slices/ClientAdmin";
import { getStoreList } from "Slices/StoreAdmin";

import { Space } from "antd";
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
// import { getStoreList } from "Pages/Admin/Slices/Store";

const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;

const ClientList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});

  const [q, setQ] = useState("");

  const [open, setOpen] = useState(false);

  const [dataForm, SetDataForm] = useState<any>();

  const fSearch = (rows: any[]) => {
    return rows.filter((row) => row?.name?.toLowerCase().indexOf(q) > -1);
  };

  const { clientList } = useSelector((state: RootState) => state.clientAdmin);

  const { stores } = useSelector((state: RootState) => state.storeAdmin);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const handleChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  const columns: ColumnsType<any> = [
    {
      title: "Tên người thuê",
      dataIndex: "name",

      width: 200,
    },
    {
      title: "Trạng thái",
      dataIndex: "isLoan",
      filters: [
        { text: "Chưa vay", value: false },
        { text: "Đã vay", value: true },
      ],
      filteredValue: filteredInfo.isLoan || null,
      onFilter: (value, record) => {
        console.log(value.toString(), "ll");
        console.log(record.isLoan.toString(), "22");
        console.log(record.isLoan.toString().includes(value.toString()));
        return record.isLoan.toString().includes(value.toString());
      },

      ellipsis: true,
      width: 100,
      render: (value, record, index) => {
        if (value === true) return <div>Đã vay</div>;
        else return <div>Chưa vay</div>;
      },
    },
    {
      title: "Hình thức",
      dataIndex: "loanType",
      width: 150,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      width: 150,
      render: (value) => <div>{value}</div>,
    },
    {
      title: "Hành động",
      width: 150,
      render: (value, record, index) => (
        <>
          <Button
            block
            className="mb-2"
            onClick={() => {
              SetDataForm(record);
              setOpen(true);
            }}
          >
            Chi tiết
          </Button>
          <Button
            danger
            block
            type="primary"
            onClick={() =>
              Swal.fire({
                title: `Bạn muốn xóa`,
                text: value.name,
                showCancelButton: true,
                confirmButtonColor: "#fb4226",
                cancelButtonColor: "rgb(167 167 167)",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  onDeleteClient(value?.id);
                }
              })
            }
          >
            Xóa
          </Button>
        </>
      ),
    },
  ];

  interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: any) => void;
    onCancel: () => void;
  }

  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    if (dataForm) {
      form.setFieldsValue({
        name: dataForm?.name,
        email: dataForm?.email,
        address: dataForm?.address,
        loanType: dataForm?.loanType,
        phone: dataForm?.phone,
        isLoan: dataForm?.isLoan,
        note: dataForm?.note,
      });
    }
    return (
      <Modal
        width={"80%"}
        open={open}
        title="Chi tiết khách hàng"
        okText="Sửa"
        cancelText="Đóng"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
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
              name={"address"}
              label="Address"
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
                <Option value="Đăng ký xe máy">Đăng ký xe máy</Option>
                <Option value="Đăng ký ô tô">Đăng ký ô tô</Option>
                <Option value="Ô tô">Ô tô</Option>
                <Option value="Xe máy">Xe máy</Option>
                <Option value="Tài sản khác">Tài sản khác</Option>
              </Select>
            </Form.Item>
            <Form.Item name="isLoan" label="Trạng thái" hasFeedback>
              <Select placeholder="Trạng thái khách hàng">
                <Option value={true}>Đã vay</Option>
                <Option value={false}>Chưa vay</Option>
              </Select>
            </Form.Item>
            <Form.Item name="note" label="Ghi Chú" hasFeedback>
              <TextArea />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    );
  };

  useEffect(() => {
    dispatch(getClientList());
    dispatch(getStoreList());
  }, [dispatch]);

  const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    /* console.log("params", pagination, filters, sorter, extra); */
  };

  const onDeleteClient = (id: string) => {
    dispatch(deleteClient(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfully") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getClientList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const onCreate = (values: any) => {
    const data = {
      ...values,
      id: dataForm.id,
    };
    dispatch(updateClient(data))
      .unwrap()
      .then((result) => {
        if (result === "Update successfully") {
          Swal.fire({
            title: `Sửa thành công`,
          });
          dispatch(getClientList());
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
    setOpen(false);
    SetDataForm(undefined);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Người Vay
      </h1>
      <Row>
        <Col lg={{ span: 6 }} md={{ span: 8 }} className="mb-2">
          <div className="flex-row md:flex">
            <Search
              className="mb-2 mr-2"
              placeholder="Tìm theo tên"
              onChange={handleSearch}
            />
            <Button>
              <NavLink to={"addClient"}>Thêm</NavLink>
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={fSearch(clientList)}
        onChange={handleChange}
        // onChange={onChange}
        scroll={{ x: 800 }}
        bordered
      />
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
          SetDataForm(undefined);
        }}
      />
    </div>
  );
};

export default ClientList;
