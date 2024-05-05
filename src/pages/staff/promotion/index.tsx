import { Button, Checkbox, Form, Input, Select, TimePicker } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";

const { Search } = Input;
const { Option } = Select;

const StaffPromotion = () => {
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

  const Coupon = [
    {
      id: "1",
      code: "Dr804t",
      discount: 20,
      range: "1-2",
      amount: 20,
      roomType: "VIP Room",
    },
    {
      id: "2",
      code: "XX7T",
      discount: 15,
      range: "1-2",
      amount: 200,
      roomType: "Normal Room",
    },
  ];

  const columns: ColumnsType = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      align: "center",
      render: (e) => <div>{e}%</div>,
    },
    {
      title: "Range",
      //   dataIndex: "maxPeople",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      align: "center",
    },
    {
      title: "Room Type",
      dataIndex: "roomType",
      align: "center",
    },
    {
      key: "x",
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectCoupon(e);
              setIsEdit(true);
              setOpenModal(true);
            }}
            className="px-6 border border-primary-blue rounded-l text-primary-blue"
          >
            Edit
          </Button>
          {/* <Button
            icon={<DeleteOutlined />}
            style={{ color: "red" }}
            type="text"
            onClick={() => {}}
            className="px-6 rounded-xl"
          /> */}
        </div>
      ),
      align: "center",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center place-items-center gap-4 p-6">
        <div className="col-span-1">
        <label className="mr-3 w-3/12">Search</label>
          <Search
            placeholder="Coupon Code"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch);
            }}
            style={{ width: 200 }}
          />
        </div>
        <div className="col-span-1 w-8/12">
        <label className="mr-3 w-3/12">Filter</label>
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
            className="px-6 border bg-primary-blue rounded-xl text-white"
          >
            Create
          </Button>
        </div>
      </div>
      <div className="px-40">
        <MyTable
          dataSource={Coupon}
          rowKey={(record) => record.id}
          columns={columns}
        />
      </div>
      <ModalForm
        title={isEdit ? "Edit Coupon" : "Add Coupon"}
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
            label="Coupon Code"
            name="code"
            rules={[{ required: true, message: "Please input Coupon Code!" }]}
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Discount Percentage"
            name="discount"
            rules={[
              { required: true, message: "Please input Discount Percentage!" },
            ]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Please input Amount!" }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>

          <div className="col-span-1 md:col-span-3">
            <Form.Item
              name="startTime"
              label={<p className="font-bold">เวลาที่เริ่ม</p>}
              rules={[{ required: true, message: "กรุณากรอกเวลาที่เริ่ม" }]}
              hasFeedback
            >
              <TimePicker
                size="large"
                needConfirm={false}
                minuteStep={15}
                showNow={false}
                format="HH:mm"
                className="w-full"
              />
            </Form.Item>
          </div>

          <div className="col-span-1 md:col-span-3">
            <Form.Item
              name="endTime"
              label={<p className="font-bold">เวลาที่สิ้นสุด</p>}
              rules={[{ required: true, message: "กรุณากรอกเวลาที่สิ้นสุด" }]}
              hasFeedback
            >
              <TimePicker
                size="large"
                format="HH:mm"
                needConfirm={false}
                minuteStep={15}
                showNow={false}
                className="w-full"
              />
            </Form.Item>
          </div>
          <Form.Item name="subject">
            <Checkbox.Group className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-2 text-center font-bold">
              <div className="col-span-1">
                Deluxe <br />
                <Checkbox value="MTH" />
              </div>
              <div className="col-span-1">
                VIP <br />
                <Checkbox value="PHY" />
              </div>
              <div>
                Normal <br />
                <Checkbox value="CHM" />
              </div>
            </Checkbox.Group>
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

export default StaffPromotion;
