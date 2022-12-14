import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "configStore";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Upload, UploadProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Tag, Tooltip } from "antd";
import { add } from "Slices/service";
import Swal from "sweetalert2";
const AddService = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm();

  let navigate = useNavigate();

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

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const handleChange = (e: any) => {
    // console.log(e);
  };

  const [tags, setTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };

  const onCreate = (values: any) => {
    let data = {
      ...values,
      content: tags,
    };
    dispatch(add(data))
      .unwrap()
      .then((result) => {
        if (result?.id) {
          Swal.fire({
            title: `Th??m Th??nh c??ng`,
          });
          navigate("/dashboard/service", { replace: true });
        } else {
          Swal.fire({
            title: `Th??m th???t b???i`,
          });
        }
      });
  };
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl text-red-500 ">Th??m D???ch V???</h1>
      <Form {...layout} form={form} onFinish={onCreate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Form.Item
            name={"name"}
            label="T??n d???ch v???"
            rules={[
              {
                required: true,
                message: "Kh??ng ???????c b??? tr???ng m???c n??y",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name={"title"}
            label="Ti??u ?????"
            rules={[
              {
                required: true,
                message: "Kh??ng ???????c b??? tr???ng m???c n??y",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name="img"
            label="H??nh ???nh"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: "Kh??ng ???????c b??? tr???ng",
              },
            ]}
          >
            <Upload {...props} listType="picture">
              <Button>Upload ???nh</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="N???i dung">
            {tags.map((tag, index) => {
              if (editInputIndex === index) {
                return (
                  <Input
                    ref={editInputRef}
                    key={tag}
                    size="small"
                    className="tag-input"
                    value={editInputValue}
                    onChange={handleEditInputChange}
                    onBlur={handleEditInputConfirm}
                    onPressEnter={handleEditInputConfirm}
                  />
                );
              }

              const isLongTag = tag.length > 20;

              const tagElem = (
                <Tag
                  className="edit-tag"
                  key={tag}
                  closable={index !== -1}
                  onClose={() => handleClose(tag)}
                >
                  <span
                    onDoubleClick={(e) => {
                      setEditInputIndex(index);
                      setEditInputValue(tag);
                      e.preventDefault();
                    }}
                  >
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                  </span>
                </Tag>
              );
              return isLongTag ? (
                <Tooltip title={tag} key={tag}>
                  {tagElem}
                </Tooltip>
              ) : (
                tagElem
              );
            })}
            {inputVisible && (
              <Input
                ref={inputRef}
                type="text"
                size="small"
                className="tag-input"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag className="site-tag-plus" onClick={showInput}>
                <PlusOutlined /> New Tag
              </Tag>
            )}
          </Form.Item>
        </div>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" danger htmlType="submit">
            Th??m
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddService;
