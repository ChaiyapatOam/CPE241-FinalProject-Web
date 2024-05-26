import { Button, Form, Input, TimePicker } from 'antd'
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
      render: () => (
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
              <img src="/icons/delete.svg" width={36} height={36} alt="" />
            </button>
          </div>
        </div>
      ),
      align: 'center',
    },
  ]

  return (
    <>
      <div className="ml-10  text-xl my-5">
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
      {/* <p className="text-xl ml-10 "> Add new Service</p> */}
      <div className="flex justify-evenly mt-5 ">
        <div>
          <label className="mr-3">Service Name</label>
          <input className="border rounded-md pl-2" placeholder="name" />
        </div>
        <div>
          <label className="ml-10 mr-3">Cost</label>
          <input className="border rounded-md pl-2" placeholder="Cost" />
        </div>
        <Button
          onClick={(e) => {
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
