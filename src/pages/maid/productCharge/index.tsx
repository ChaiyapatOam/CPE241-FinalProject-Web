import { Button, Checkbox, Form, Input, Select, TimePicker } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";
import StaffNavBar from "@/components/StaffNavBar";


const MaidProductCharge = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectProduct, setSelectedProduct] = useState({} as any);
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
    form.setFieldsValue({ ...selectProduct});
  }, [selectProduct]);

  return (
    <>
     <div className="flex flex-row">
        <div className="basis-1/4">
        <StaffNavBar />
        </div>
      <div className="basis-3/4">
        <div className="bg-white rounded-lg drop-shadow-md ml-10 mr-10">
          <div className="bg-primary-blue p-4 text-secondary rounded-t-lg "><h1 className="font-bold">Create Product Ordering</h1></div>
          <div className="flex flex-col ml-3">
            <div className="grid grid-cols-3 gap-4 p-3">
              <div>
                <span className="font-semibold">RoomID :</span> 65077
              </div>
              <div>
                <span className="font-semibold">ProductID :</span> 3542 
              </div>
              <div>
                <span className="font-semibold">Quantity :</span> 3
              </div>
            </div>
            <div className="text-right mr-5 mb-5 mt-5">
            <Button
                        onClick={() => {
                        // setSelectedProduct(e);
                        setIsEdit(true);
                        setOpenModal(true);}}
                        className="px-6 border bg-primary-blue rounded-md text-white ml-3">
                Add Product Order
              </Button>
            </div>
          </div>
        </div>
        <ModalForm
        title={"Add Product Order"}
        desc=""
        isopen={openModal}
        setIsOpen={setOpenModal}
      >
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            handleCreate(values);
          }}
        >
           <Form.Item
            label="RoomID"
            name="roomID"
            rules={[{ required: true, message: "Please input Product name!" }]}
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="ProductID"
            name="productID"
            rules={[{ required: true, message: "Please input Product name!" }]}
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Quanity"
            name="quantity"
            rules={[{ required: true, message: "Please input Price!" }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Button
            onClick={() => {}}
            htmlType="submit"
            className="px-6 mt-3 border border-primary-blue rounded-xl w-full"
            size="large"
          >
            {"Add order"}
          </Button>
        </Form>
      </ModalForm>
      </div>
      </div>
    </>
  );
};

export default MaidProductCharge;


