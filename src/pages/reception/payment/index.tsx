import { Button, Form, Input, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";
import StaffNavBar from "@/components/StaffNavBar";
import Checkbox from "@/components/Checkbox";


const Payment= () => {
    const [openModal, setOpenModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedMaid, setSelectedMaid] = useState({} as any);
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
      form.setFieldsValue({ ...selectedMaid });
    }, [selectedMaid]);
  
  
    const Payments = [
      {
        name: "Room",
        quantity: 1,
        price: 2550,
      },
    ];
  
    const columns: ColumnsType = [
      {
        title: "Name",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
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
                  setSelectedMaid(e);
                setIsEdit(true);
                setOpenModal(true);
                  }}
              className="px-6 border bg-primary-blue rounded-md text-white"
              >
              paid
            </Button>
            {/* <input type="checkbox" /> */}
            
          </div>
          
        ),
        align: "end",
      },
    ];
  
  
  
    return (
      <>
        <div className="flex flex-row">
          <div className="basis-1/4">
          <StaffNavBar />
          </div>
        <div className="basis-2/4">
            <h1 className="text-xl ml-6 font-semibold">Payment ID #P011232</h1>
          <div className="flex flex-col drop-shadow-md rounded bg-white mt-3 ">
            <div className="basis-2/4 mb-10 ">
            <div className="flex flex-row border-b-2">
              <div className="basis-2/4 p-2">
                Name
              </div>
              <div className="basis-1/4 p-2">
                Quantity
              </div>
              <div className="basis-1/4 p-2">
                Price
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <div className="basis-2/4 p-2">
                Sing water by Kabigon
              </div>
              <div className="basis-1/4 p-2">
                3
              </div>
              <div className="basis-1/4 p-2">
                60
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <div className="basis-2/4 p-2">
                Sing water by Kabigon
              </div>
              <div className="basis-1/4 p-2">
                3
              </div>
              <div className="basis-1/4 p-2">
                60
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <div className="basis-2/4 p-2">
                Sing water by Kabigon
              </div>
              <div className="basis-1/4 p-2">
                3
              </div>
              <div className="basis-1/4 p-2">
                60
              </div>
            </div>
            
            </div>
            <div className="basis-1/4 mt-10 ">
            <div className="flex flex-row border-b-2">
              <div className="basis-2/4 p-2">
                Discount
              </div>
              <div className="basis-1/4 p-2 ">
              </div>
              <div className="basis-1/4 p-2 ">
                5%
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <div className="basis-2/4 p-2">
                Total cost
              </div>
              <div className="basis-1/4 p-2 ">
              </div>
              <div className="basis-1/4 p-2 ">
                60
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="basis-1/4 p-5 justify-center">
            <div className="p-10 bg-white border border-dark-grey">
                <h1 className="text-xl font-semibold">BookingID : #B069069</h1>
                <h1 className="text-lg">Customer : #C0001</h1>
                <h1 className="text-lg">Pattaranun Ayaprasitphol</h1>
                <h1 className="text-lg">Email : pattaranun.ayap@kmutt.ac.th</h1>
                <h1 className="text-lg">Phone : 0900006969</h1>
                <Form.Item
                    label="Code"
                    name="code"
                    rules={[{ required: false, message: "Please input Amount!" }]}>
                    <Input type="text" size="large" className="w-full" />
                    <Button
                        onClick={() => {
                        setSelectedMaid(e);
                        setIsEdit(true);
                        setOpenModal(true);}}
                        className="px-6 border bg-primary-blue rounded-md text-white mt-3">
                use code
                </Button>
                </Form.Item>
                <Form.Item label="Payment Method" name="fieldA" valuePropName="checked"  >
                        <Checkbox value="Cash" />
                        <Checkbox value="Credit" />
                </Form.Item>
                <Button
                        onClick={() => {
                        setSelectedMaid(e);
                        setIsEdit(true);
                        setOpenModal(true);}}
                        className=" px-6 border bg-primary-blue rounded-md text-white w-full">
                Confirm Payment
              </Button>
            </div>
           
        </div>
          
        </div>
      </>
    )
}


export default Payment;