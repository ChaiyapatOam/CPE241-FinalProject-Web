import { Button, Form, Input, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";
import StaffNavBar from "@/components/StaffNavBar";
import Checkbox from "@/components/Checkbox";


const ReceptPayment= () => {
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
  
  
    const Payment = [
      {
        id:"P001",
        title: "Booking-Room",
        quantity: 1,
        price: 2550,
      },
      {
        id:"P002",
        title: "Product-Water",
        quantity: 2,
        price: 40,
      },
      {
        id:"P003",
        title: "Service-Spa massage",
        quantity: 1,
        price: 1000,
      },
      
    ];
  
    const columns: ColumnsType = [
      {
        title: "Payment ID",
        dataIndex: "id",
        key: "id",
        align: "center",
      },
      {
        title: "Title",
        dataIndex: "title",
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
              Bill
            </Button>
            {/* <input type="checkbox" /> */}
            
          </div>
          
        ),
        align: "center",
      },
    ];
  
  
  
    return (
      <>
        <div className="flex flex-row">
          <div className="basis-1/4">
          <StaffNavBar />
          </div>
        <div className="basis-2/4">
            <h1 className="text-xl ml-6">Room A102</h1>
        <div className="px-50 drop-shadow-md rounded">
          <MyTable
            dataSource={Payment}
            rowKey={(record) => record.id}
            columns={columns}
          />
        </div>
        </div>
        <div className="basis-1/4 p-5">
            <div className="p-10 bg-white border border-dark-grey">
                <h1 className="text-xl font-semibold">BookingID : #B069069</h1>
                <h1 className="text-lg">Customer : #C0001</h1>
                <h1 className="text-lg">Pattaranun Ayaprasitphol</h1>
                <h1 className="text-lg">Email : pattaranun.ayap@kmutt.ac.th</h1>
                <h1 className="text-lg">Phone : 0900006969</h1>

            </div>
        </div>
          
        </div>
      </>
    )
}


export default ReceptPayment;