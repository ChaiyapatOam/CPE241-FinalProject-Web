import { Button, Form, Input, Select, TimePicker } from 'antd'
// import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'
import DateTime from '@/components/DateTime'

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
      <div className="flex flex-row justify-center items-center place-items-center gap-4 p-6 ">
        <div className="col-span-1 w-4/12">
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
            <Option value="3">Deluxe</Option>
          </Select>
        </div>
        {/* <div className="col-span-1">
          <label className="mr-3">start date</label>
          <Search
            placeholder="DD/MM/YYYY"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
            }}
            style={{ width: 200 }}
          />
        </div> */}
        <Form.Item
          label={<p className="font-bold">Date Select</p>}
          hasFeedback
          className='pt-5'
        >
          <div >
            <DateTime />
          </div>
        </Form.Item>
      </div>
      <div className="px-60">
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

          {/* <div className="col-span-1 md:col-span-3">
            <Form.Item
              name="StartDate"
              label={<p className="font-bold">Start Date</p>}
              rules={[{ required: true, message: 'กรุณากรอกเวลาที่เริ่ม' }]}
              hasFeedback
            >
              <div className="">
                <label className="">Date Select &nbsp;</label>
                <DateTime />
              </div>
            </Form.Item>
          </div> */}

          <div className="col-span-1 md:col-span-3">
            <Form.Item
              name="EndDate"
              label={<p className="font-bold">Date Range</p>}
              rules={[{ required: true, message: 'กรุณากรอกเวลาที่สิ้นสุด' }]}
              hasFeedback
            >
              <div className="">
                <DateTime />
              </div>
            </Form.Item>
          </div>
          <Button
            onClick={() => { }}
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
