import { Button, Checkbox, Form, Input, Select, TimePicker } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";
import StaffNavBar from "@/components/StaffNavBar";
import DateTime from "@/components/DateTime";

const { Search } = Input;
const { Option } = Select;

const StaffAvaliableRoom = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectCoupon, setSelectCoupon] = useState({} as any);
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
    form.setFieldsValue({ ...selectCoupon });
  }, [selectCoupon]);

  const Room = [
    {
      id: "1",
      status: "Avaliable",
      roomTypeName : "King",
    },
    {
      id: "2",
      roomTypeName : "King",
      status: "Not Avaliable",
    },
    {
      id: "2",
      roomTypeName : "King",
      status: "Not Avaliable",
    },
    {
      id: "2",
      roomTypeName : "King",
      status: "Not Avaliable",
    },
    {
      id: "2",
      roomTypeName : "King",
      status: "Avaliable",
    },
    {
      id: "2",
      roomTypeName : "King",
      status: "Avaliable",
    },
  ];

  const columns: ColumnsType = [
    {
      title: "Room Type",
      dataIndex: "roomTypeName",
      key: "id",
      align: "center",
    },
    {
      title: "Room id",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
    },
    {
      key: "x",
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <div>
            <button
              onClick={() => {
                form.resetFields();
                setIsEdit(false);
                setOpenModal(true);
              }}
              // className="px-6 border border-primary-blue rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M16.5 6H6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9V30C3 30.7956 3.31607 31.5587 3.87868 32.1213C4.44129 32.6839 5.20435 33 6 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V19.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.75 3.7501C28.3467 3.15336 29.1561 2.81812 30 2.81812C30.8439 2.81812 31.6533 3.15336 32.25 3.7501C32.8467 4.34683 33.182 5.15618 33.182 6.0001C33.182 6.84401 32.8467 7.65336 32.25 8.2501L18 22.5001L12 24.0001L13.5 18.0001L27.75 3.7501Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ),
      align: "center",
    },
  ];

  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/5">
          <StaffNavBar />
        </div>
        <div className="basis-4/5">
          <div className="flex flex-row justify-center">
            <div className="w-4/12">
              <label className="">Room Type &nbsp;</label>
              <Select
                className="w-6/12"
                size="large"
                labelInValue
                onChange={(e) => {
                  console.log(e.label);
                }}
              >
                <Option value="1">Regular</Option>
                <Option value="2">King Size</Option>
                <Option value="2">Deluxe</Option>
              </Select>
            </div>
            <div className="">
              <label className="">Date Select &nbsp;</label>
              <DateTime />
            </div>
          </div>

          <div className="px-80">
            <MyTable
              dataSource={Room}
              rowKey={(record) => record.id}
              columns={columns}
            />
          </div>
          <ModalForm
            // title={isEdit ? "Edit Coupon" : "Add Coupon"}
            title={"Edit Status"}
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
              <div className="col-span-1 md:col-span-3 ">
                <Form.Item
                  name="Date to change status"
                  label={<p className="font-bold">Selected Date Range</p>}
                  rules={[
                    {
                      required: true,
                      message: "Please select date !",
                    },
                  ]}
                  hasFeedback
                >
                  <DateTime />
                </Form.Item>
              </div>
              <Button
                onClick={() => {}}
                htmlType="submit"
                className="px-6 border border-primary-blue rounded-xl place-self-center "
                size="large"
              >
                Confirm Edit
              </Button>
            </Form>
          </ModalForm>
        </div>
      </div>
    </>
  );
};

export default StaffAvaliableRoom;
