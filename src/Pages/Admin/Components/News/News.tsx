import React, { useEffect, useRef, useState } from "react";

import { Button, Table, Form, Input, Modal, Row, Col, Select } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";

import { deleteNews, getNewsList, updateNews } from "Slices/NewsAdmin";

import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { getTagNewsList } from "Slices/TagNewsAdmin";

const { Search } = Input;

const { Option } = Select;

const News = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [q, setQ] = useState("");

  const [content, SetContent] = useState("");

  const config: any = {
    readonly: false,
    editor: {
      height: 500,
    },
  };

  const editor = useRef(null);

  const [editFormValue, SetEditFormValue] = useState<any>();

  const [open, setOpen] = useState(false);

  const { newsList } = useSelector((state: RootState) => state.newsAdmin);
  const { tag } = useSelector((state: RootState) => state.tagNewsAdmin);

  const fSearch = (rows: any[]) => {
    return rows?.filter((row) => row?.name?.toLowerCase().indexOf(q) > -1);
  };

  useEffect(() => {
    dispatch(getNewsList());
    dispatch(getTagNewsList());
  }, [dispatch]);

  const DeleteNews = (id: string) => {
    dispatch(deleteNews(id))
      .unwrap()
      .then((result) => {
        if (result === "Delete successfully") {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getNewsList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const onCreate = (values: any) => {
    setOpen(false);
    SetEditFormValue(undefined);
    dispatch(updateNews(values));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value?.toLowerCase());
  };

  const IsHot = (values: any, ishot: any) => {
    let ishotData = {
      ...values,
      isHot: ishot,
    };
    dispatch(updateNews(ishotData));
  };

  const columns: ColumnsType<any> = [
    {
      title: "Tiêu đề",
      dataIndex: "name",
      width: 300,
    },

    {
      title: "Banner",
      align: "center",

      dataIndex: "img",
      width: 300,
      render: (value, record, index) => (
        <img
          className="mb-2"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "10px",
          }}
          src={value}
          alt={`hình ${index}`}
        />
      ),
    },

    {
      title: "Hot",
      dataIndex: "isHot",
      width: 100,
      align: "center",
      render: (value, record, index) => {
        if (value === true) {
          return (
            <div /* onClick={() => IsHot(record, false)} */>
              <LikeOutlined
                style={{ fontSize: "16px", color: "rgb(255,255,255)" }}
              />
            </div>
          );
        } else {
          return (
            <div /* onClick={() => IsHot(record, true)} */>
              <DislikeOutlined style={{ fontSize: "25px", color: "red" }} />
            </div>
          );
        }
      },
    },

    { title: "Loại tin", dataIndex: "type", width: 150 },

    {
      title: "ACTION",
      width: 150,
      render: (value, record, index) => (
        <div>
          <Button
            block
            onClick={() => {
              setOpen(true);
              SetEditFormValue(record);
              SetContent(record?.content);
            }}
            className="mb-2"
          >
            Chi tiết
          </Button>
          <Button
            block
            danger
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
                  DeleteNews(record?.id);
                }
              })
            }
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    /* console.log("params", pagination, filters, sorter, extra); */
  };

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
    if (editFormValue) {
      form.setFieldsValue({
        name: editFormValue?.name,
        descript: editFormValue?.descript,
        content: content,
        id: editFormValue?.id,
        type: editFormValue?.type,
      });
    }
    return (
      <Modal
        width={800}
        open={open}
        title="Chi tiết tin"
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
          <Form.Item
            name="id"
            label="id"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tiêu đề"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Nội dung">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={(e) => SetContent(e)}
            />
          </Form.Item>
          <Form.Item name="descript" label="Mô tả">
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Loại tin">
            <Select>
              {tag.map((e) => {
                return (
                  <Option key={e.id} value={e.name}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Tin Tức
      </h1>
      <Row>
        <Col lg={{ span: 6 }} md={{ span: 8 }}>
          <Search
            className="mb-2 text-red"
            placeholder="Tìm theo tiêu đề"
            onChange={handleSearch}
          />
        </Col>
      </Row>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        dataSource={fSearch(newsList)}
        onChange={onChange}
        scroll={{ x: 800 }}
        bordered
      />
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
          SetEditFormValue(undefined);
        }}
      />
    </div>
  );
};

export default News;
