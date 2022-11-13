import { AppDispatch, RootState } from "configStore";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Button, Form, Input, Modal, Table } from "antd";
import Swal from "sweetalert2";
import {
  deleteQuestion,
  getQuestionList,
  updateQuestion,
} from "Slices/questionAdmin";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
const Question = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [editFormValue, SetEditFormValue] = useState<any>();

  const [showEdit, SetShowEdit] = useState(false);

  const [idQuestion, SetIdQuestion] = useState("");

  const [content, SetContent] = useState("");

  let contentnew = "";

  const editor = useRef(null);

  const { questions } = useSelector((state: RootState) => state.question);

  const config: any = {
    readonly: false,
    removeButtons: ["subscript", "superscript", "file", "video"],
  };

  useEffect(() => {
    dispatch(getQuestionList());
  }, [dispatch]);

  useEffect(() => {
    console.log(contentnew, "pp");
  });

  const onDelete = (id: string) => {
    dispatch(deleteQuestion(id))
      .unwrap()
      .then((result) => {
        if ((result = "Delete successfuly")) {
          Swal.fire({
            title: `Xóa thành công`,
          });
          dispatch(getQuestionList());
        } else {
          Swal.fire({
            title: `Xóa thất bại`,
          });
        }
      });
  };

  const onEdit = (values: any) => {
    let dataEdit = {
      ...values,
      id: idQuestion,
    };
    dispatch(updateQuestion(dataEdit))
      .unwrap()
      .then((result) => {
        if (result === "Update successfully") {
          Swal.fire({
            title: `Sửa Thành công`,
          });
          SetShowEdit(false);
          dispatch(getQuestionList());
        } else {
          Swal.fire({
            title: `Sửa thất bại`,
          });
        }
      });
  };

  const columns: ColumnsType<any> = [
    {
      title: "Tiêu Đề",
      dataIndex: "title",
    },

    {
      title: "ACTION",
      align: "center",
      width: 200,
      render: (value, record, index) => (
        <div>
          <Button
            block
            className="mb-2"
            onClick={() => {
              SetShowEdit(true);
              SetContent(record?.content);
              SetIdQuestion(record?.id);
              SetEditFormValue(record);
              contentnew = record?.content;
              console.log(contentnew, "ll");
            }}
          >
            Sửa
          </Button>
          <Button
            block
            danger
            onClick={() => {
              Swal.fire({
                title: `Bạn muốn xóa câu hỏi`,
                text: value?.name,
                showCancelButton: true,
                confirmButtonColor: "#fb4226",
                cancelButtonColor: "rgb(167 167 167)",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  onDelete(value?.id);
                }
              });
            }}
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

  interface EditFromProps {
    showEdit: boolean;
    onEdit: (values: any) => void;
    onCancelEdit: () => void;
  }

  const EditFrom: React.FC<EditFromProps> = ({
    showEdit,
    onEdit,
    onCancelEdit,
  }) => {
    const [form] = Form.useForm();
    if (editFormValue) {
      form.setFieldsValue({
        title: editFormValue?.title,
        content: content,
        id: editFormValue?.id,
      });
    }
    return (
      <Modal
        open={showEdit}
        title="Sửa Câu Hỏi"
        okText="Sửa"
        cancelText="Hủy"
        onCancel={onCancelEdit}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onEdit(values);
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
            className="hidden"
            label="IdQuestion"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="title"
            label="Tiêu Đề"
            rules={[
              {
                required: true,
                message: "Không được bỏ trống",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Nội Dung">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={(e) => {
                SetContent(e);
                contentnew = e;
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-red-500">
        Danh Sách Câu Hỏi
      </h1>
      <Button
        className="mb-2"
        onClick={() => navigate("/dashboard/addquestion")}
      >
        Thêm
      </Button>
      <Table
        rowKey={(record) => record?.id}
        columns={columns}
        dataSource={questions}
        onChange={onChange}
        bordered
        scroll={{ x: 800 }}
      />

      <EditFrom
        showEdit={showEdit}
        onEdit={onEdit}
        onCancelEdit={() => {
          SetShowEdit(false);
        }}
      />
    </div>
  );
};

export default Question;
