import { Button, Checkbox, Form, Input, Select, TimePicker } from 'antd'
// import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'

const { Search } = Input

const StaffService = () => {
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

  const service = [
    {
      id: '1',
      name: 'Spa custard',
      cost: 1500,
    },
    {
      id: '2',
      name: 'Big Cleaning',
      cost: 1500,
    },
    {
      id: '3',
      name: 'Laundry',
      cost: 200,
    },
  ]

  const columns: ColumnsType = [
    {
      title: 'Sevice id',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Service Name',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
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
              }}
              // className="px-6 border border-primary-blue rounded-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M4.5 9H31.5"
                  stroke="#FF0000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.5 9V30C28.5 31.5 27 33 25.5 33H10.5C9 33 7.5 31.5 7.5 30V9"
                  stroke="#FF0000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 9V6C12 4.5 13.5 3 15 3H21C22.5 3 24 4.5 24 6V9"
                  stroke="#FF0000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 16.5V25.5"
                  stroke="#FF0000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 16.5V25.5"
                  stroke="#FF0000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ),
      align: 'center',
    },
  ]

  return (
    <>
      <div className="ml-10  text-xl">
        <label className="mr-3"> Search :</label>
        <Search
          placeholder="ServiceId, Service name.."
          allowClear
          onSearch={(onSearch) => {
            console.log(onSearch)
          }}
          style={{ width: 200 }}
        />
      </div>
      <p className="text-xl ml-10"> Add new Service</p>
      <div className="flex justify-around">
        <div>
          <label className="mr-3">Service Name</label>
          <input className="border border-dark-gray rounded-md pl-2" placeholder="name" />
        </div>
        <div>
          <label className="ml-10 mr-3">Fee</label>
          <input className="border border-dark-gray rounded-md pl-2" />
        </div>
        <Button
          onClick={() => {
            setSelectCoupon(e)
            setIsEdit(true)
            setOpenModal(true)
          }}
          className="px-6 border bg-primary-blue rounded-l text-white"
        >
          Add
        </Button>
      </div>

      <div className="px-40">
        <MyTable dataSource={service} rowKey={(record) => record.id} columns={columns} />
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

export default StaffService
