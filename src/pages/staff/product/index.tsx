import { Button, Form, Input, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";

const { Search } = Input;
const { Option } = Select;

const StaffProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectProduct, setSelectProduct] = useState({} as any);
  const formRef = useRef(null);
  const [form] = Form.useForm();

  const handleCreate = (values: any) => {
    setOpenModal(false);
    console.log(values);
  };

  const handleEdit = (values: any) => {
    console.log(values);
  };

  //   const handleDelete = (values: any) => {
  //     console.log(values);
  //   };

  useEffect(() => {
    form.setFieldsValue({ ...selectProduct });
  }, [selectProduct]);

  const Products = [
    {
      id: "1",
      name: "Coca Cola",
      price: 20,
      quantity: 20,
      category: "Drink",
    },
    {
      id: "2",
      name: "Pepsi",
      price: 15,
      quantity: 200,
      category: "Drink",
    },
    {
      id: "3",
      name: "Fanta",
      price: 20,
      quantity: 20,
      category: "Drink",
    },
  ];

  const productColumns: ColumnsType = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Category",
      dataIndex: "category",
      align: "center",
    },
    {
      title: "price",
      dataIndex: "price",
      align: "center",
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      align: "center",
    },
    {
      key: "x",
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectProduct(e);
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
          dataSource={Products}
          rowKey={(record) => record.id}
          columns={productColumns}
        />
      </div>
      <ModalForm
        title={isEdit ? "Edit Product" : "Add Product"}
        desc=""
        isopen={openModal}
        setIsOpen={setOpenModal}
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
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input Product name!" }]}
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input Price!" }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="quantity"
            name="quantity"
            rules={[{ required: true, message: "Please input quantity!" }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>

          <Form.Item
            label="category"
            name="category"
            rules={[{ required: true, message: "Please input category!" }]}
          >
            <Input type="text" size="large" className="w-full" />
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

export default StaffProduct;
