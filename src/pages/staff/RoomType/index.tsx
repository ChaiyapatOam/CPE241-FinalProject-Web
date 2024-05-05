import { Button, Form, Input, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";

const { Search } = Input;
const { Option } = Select;

const StaffRoomType = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState({} as any);
  const formRef = useRef(null);
  const [form] = Form.useForm();

  const handleCreate = (values: any) => {
    setOpenModal(false);
  };

  const handleEdit = (values: any) => {};

  const handleDelete = (values: any) => {};

  useEffect(() => {
    form.setFieldsValue({ ...selectedRoomType });
  }, [selectedRoomType]);

  const RoomType = [
    {
      id: "1",
      name: "Deluxe Room",
      maxPeople: 3,
      price: 500,
    },
    {
      id: "2",
      name: "Normal Room",
      maxPeople: 4,
      price: 200,
    },
  ];

  const columns: ColumnsType = [
    {
      title: "RoomTypeID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "RoomType",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "MaxPeople",
      dataIndex: "maxPeople",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
    },
    {
      key: "x",
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectedRoomType(e);
              setIsEdit(true);
              setOpenModal(true);
            }}
            className="px-6 border border-primary-blue rounded-xl"
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            style={{ color: "red" }}
            type="text"
            onClick={() => {}}
            className="px-6 rounded-xl"
          />
        </div>
      ),
      align: "center",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center gap-4 p-6">
        <div className="col-span-1">
          <Search
            placeholder="employee ID"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch);
            }}
            style={{ width: 200 }}
          />
        </div>
        <div className="col-span-1">
          <Select
            className="w-1/2"
            size="large"
            labelInValue
            onChange={(e) => {
              console.log(e.label);
            }}
          >
            <Option value="1">Room Type</Option>
            <Option value="2">Max People</Option>
          </Select>
        </div>
        <div>
          <Button
            onClick={() => {
              form.resetFields();
              setIsEdit(false);
              setOpenModal(true);
            }}
            size="large"
            className="px-6 border border-primary-blue rounded-xl"
          >
            Create
          </Button>
        </div>
      </div>
      <div className="px-40">
        <MyTable
          dataSource={RoomType}
          rowKey={(record) => record.id}
          columns={columns}
        />
      </div>
      <ModalForm
        title={isEdit ? "Edit Room Type" : "Add Room Type"}
        desc=""
        isopen={openModal}
        setIsOpen={setOpenModal}
        // onSave={handleEdit}
      >
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            isEdit ? handleEdit(values) : handleCreate(values);
          }}
        >
          <Form.Item
            label="Room Type"
            name="name"
            rules={[{ required: true, message: "Please input Room Type!" }]}
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Max People"
            name="maxPeople"
            rules={[{ required: true, message: "Please input Max People!" }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input Price!" }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Button
            onClick={() => {}}
            htmlType="submit"
            className="px-6 border border-primary-blue rounded-xl"
            size="large"
          >
            {isEdit ? "Edit " : "Add"}
          </Button>
        </Form>
      </ModalForm>
    </>
  );
};

export default StaffRoomType;
