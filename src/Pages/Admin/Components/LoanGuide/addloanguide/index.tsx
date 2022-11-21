import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "configStore";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Upload, UploadProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Tag, Tooltip } from "antd";
import { add } from "Slices/loanguide";
import Swal from "sweetalert2";
const AddLoanGuide = () => {
  const dispatch = useDispatch<AppDispatch>();

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

  const onCreate = (values: any) => {
    let data = {
      ...values,
      contentProviso: tags,
      contentProcedure: tags2,
    };
    console.log(data, "data");
    dispatch(add(data))
      .unwrap()
      .then((result) => {
        if (result?.id) {
          Swal.fire({
            title: `Thêm Thành công`,
          });
          navigate("/dashboard/loanguide", { replace: true });
        } else {
          Swal.fire({
            title: `Thêm thất bại`,
          });
        }
      });
  };
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const handleChange = (e: any) => {
    // console.log(e);
  };
  /* tags 1 */
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

  /* tags 1 */
  /* tags 2 */
  const [tags2, setTags2] = useState<string[]>([]);
  const [inputVisible2, setInputVisible2] = useState(false);
  const [inputValue2, setInputValue2] = useState("");
  const [editInputIndex2, setEditInputIndex2] = useState(-1);
  const [editInputValue2, setEditInputValue2] = useState("");
  const inputRef2 = useRef<InputRef>(null);
  const editInputRef2 = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible2) {
      inputRef2.current?.focus();
    }
  }, [inputVisible2]);

  useEffect(() => {
    editInputRef2.current?.focus();
  }, [inputValue2]);

  const handleClose2 = (removedTag: string) => {
    const newTags2 = tags.filter((tag) => tag !== removedTag);
    setTags(newTags2);
  };

  const showInput2 = () => {
    setInputVisible2(true);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };

  const handleInputConfirm2 = () => {
    if (inputValue2 && tags2.indexOf(inputValue2) === -1) {
      setTags2([...tags2, inputValue2]);
    }
    setInputVisible2(false);
    setInputValue2("");
  };

  const handleEditInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue2(e.target.value);
  };

  const handleEditInputConfirm2 = () => {
    const newTags2 = [...tags2];
    newTags2[editInputIndex2] = editInputValue2;
    setTags2(newTags2);
    setEditInputIndex2(-1);
    setInputValue2("");
  };

  /* tags 2 */
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl text-red-500 ">Thêm Thủ Tục</h1>
      <Form {...layout} form={form} onFinish={onCreate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Form.Item
            name={"titleProviso"}
            label="Điều kiện"
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
            name={"titleProcedure"}
            label="Thủ tục"
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
            name={"name"}
            label="Thông tin"
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
            name={"description"}
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
            name="imgProviso"
            label="Hình ảnh điều kiện"
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
            name="imgProcedure"
            label="Hình ảnh thủ tục"
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
          <Form.Item label="Nội dung điều kiện">
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
          <Form.Item label="Nội dung thủ tục">
            {tags2.map((tag, index) => {
              if (editInputIndex2 === index) {
                return (
                  <Input
                    ref={editInputRef2}
                    key={tag}
                    size="small"
                    className="tag-input"
                    value={editInputValue2}
                    onChange={handleEditInputChange2}
                    onBlur={handleEditInputConfirm2}
                    onPressEnter={handleEditInputConfirm2}
                  />
                );
              }

              const isLongTag2 = tag.length > 20;

              const tagElem = (
                <Tag
                  className="edit-tag"
                  key={tag}
                  closable={index !== -1}
                  onClose={() => handleClose2(tag)}
                >
                  <span
                    onDoubleClick={(e) => {
                      setEditInputIndex2(index);
                      setEditInputValue2(tag);
                      e.preventDefault();
                    }}
                  >
                    {isLongTag2 ? `${tag.slice(0, 20)}...` : tag}
                  </span>
                </Tag>
              );
              return isLongTag2 ? (
                <Tooltip title={tag} key={tag}>
                  {tagElem}
                </Tooltip>
              ) : (
                tagElem
              );
            })}
            {inputVisible2 && (
              <Input
                ref={inputRef2}
                type="text"
                size="small"
                className="tag-input"
                value={inputValue2}
                onChange={handleInputChange2}
                onBlur={handleInputConfirm2}
                onPressEnter={handleInputConfirm2}
              />
            )}
            {!inputVisible2 && (
              <Tag className="site-tag-plus" onClick={showInput2}>
                <PlusOutlined /> New Tag
              </Tag>
            )}
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

export default AddLoanGuide;
