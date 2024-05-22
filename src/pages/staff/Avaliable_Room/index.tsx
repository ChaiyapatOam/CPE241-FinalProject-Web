import { Button, Form, Input, Select, TimePicker } from 'antd'
// import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'

const { Search } = Input
const { Option } = Select

const StaffAvaliableRoom = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectCoupon, setSelectCoupon] = useState({} as any)
  const formRef = useRef(null)
  const [form] = Form.useForm()

  const handleCreate = (values: any) => {
    setOpenModal(false)
    console.log(values)
  }

  const handleEdit = (values: any) => {
    console.log(values)
  }

  //   const handleDelete = (values: any) => {
  //     console.log(values);
  //   };

  useEffect(() => {
    form.setFieldsValue({ ...selectCoupon })
  }, [selectCoupon])

  const Room = [
    {
      id: '1',
      status: 'Avaliable',
    },
    {
      id: '2',
      status: 'Not Avaliable',
    },
  ]

  const columns: ColumnsType = [
    {
      title: 'Room id',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
    },
    {
      key: 'x',
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <div>
            <button
              onClick={() => {
                form.resetFields()
                setIsEdit(false)
                setOpenModal(true)
                setSelectCoupon(e)
              }}
            >
              <img src="/icons/edit.svg" width="30" height="30" />
            </button>
          </div>
        </div>
      ),
      align: 'center',
    },
  ]

  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center place-items-center gap-4 p-6 ">
        <div className="col-span-1 w-8/12">
          <label className="mr-3 w-3/12">Room Type</label>
          <Select
            className="w-6/12"
            size="large"
            labelInValue
            onChange={(e) => {
              console.log(e.label)
            }}
          >
            <Option value="1">Regular</Option>
            <Option value="2">King Size</Option>
            <Option value="2">Deluxe</Option>
          </Select>
        </div>
        <div className="col-span-1">
          <label className="mr-3">start date</label>
          <Search
            placeholder="DD/MM/YYYY"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
            }}
            style={{ width: 200 }}
          />
        </div>
        <div className="col-span-1">
          <label className="mr-3">End date</label>
          <Search
            placeholder="DD/MM/YYYY"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
            }}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <div className="px-40">
        <MyTable dataSource={Room} rowKey={(record) => record.id} columns={columns} />
      </div>
      <ModalForm
        // title={isEdit ? "Edit Coupon" : "Add Coupon"}
        title={'Edit Status'}
        desc=""
        isopen={openModal}
        setIsOpen={setOpenModal}
      >
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            isEdit ? handleEdit(values) : handleCreate(values)
          }}
        >
          {/* <Form.Item
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
          </Form.Item> */}

          <div className="col-span-1 md:col-span-3">
            <Form.Item
              name="StartDate"
              label={<p className="font-bold">Start Date</p>}
              rules={[{ required: true, message: 'กรุณากรอกเวลาที่เริ่ม' }]}
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
              name="EndDate"
              label={<p className="font-bold">End Date</p>}
              rules={[{ required: true, message: 'กรุณากรอกเวลาที่สิ้นสุด' }]}
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
          <Button
            onClick={() => {}}
            htmlType="submit"
            className="px-6 border border-primary-blue rounded-xl"
            size="large"
          >
            Confirm Edit
          </Button>
        </Form>
      </ModalForm>
    </>
  )
}

export default StaffAvaliableRoom
