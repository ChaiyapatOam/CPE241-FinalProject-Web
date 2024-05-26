import { Button, Checkbox, DatePicker, Form, Input, Select, Tag } from 'antd'
// import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'
import { useFetch } from '@/services/queries'
import { useCreate } from '@/services/useCreate'
import Loading from '@/components/Loading'
import { formatDate } from '@/utils/formatDateTime'

const { Search } = Input
const { Option } = Select

const StaffPromotion = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectCoupon, setSelectCoupon] = useState({} as any)
  const formRef = useRef(null)
  const [form] = Form.useForm()

  const roomtype = useFetch({ url: '/api/room/roomtype', key: 'roomtype' })
  const promotions = useFetch({ url: '/api/promotion', key: 'promotion' })
  const createPromotion = useCreate({ url: '/api/promotion', key: 'promotion' })
  useEffect(() => {
    form.setFieldsValue({ ...selectCoupon })
  }, [selectCoupon])

  if (promotions.isLoading && roomtype.isLoading) return <Loading />

  const handleCreate = (values: any) => {
    console.log(values)
    createPromotion.mutate(values)
    setOpenModal(false)
  }

  const handleEdit = (values: any) => {
    console.log(values)
  }

  const columns: ColumnsType = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      align: 'center',
    },
    {
      title: 'Discount',
      dataIndex: 'discount_percent',
      align: 'center',
      render: (e) => <div>{e} %</div>,
    },
    {
      title: 'Range',
      //   dataIndex: "maxPeople",
      align: 'center',
      render: (_value, item) => (
        <div>
          {formatDate(item.start_date)} - {formatDate(item.expired_date)}
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      align: 'center',
    },
    {
      title: 'Room Type',
      dataIndex: 'roomtype',
      align: 'center',
      render: (data) => (
        <span>
          {data.map((item: any, idx: number) => {
            return (
              <Tag color="orange" key={idx}>
                {item.name.toUpperCase()}
              </Tag>
            )
          })}
        </span>
      ),
    },
    {
      key: 'x',
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectCoupon(e)
              setIsEdit(true)
              setOpenModal(true)
            }}
            className="px-6 border border-primary-blue rounded-l text-primary-blue"
          >
            Edit
          </Button>
        </div>
      ),
      align: 'center',
    },
  ]

  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center place-items-center gap-4 p-6">
        <div className="col-span-1">
          <label className="mr-3 w-3/12">Search</label>
          <Search
            placeholder="Coupon Code"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
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
              console.log(e.label)
            }}
          >
            <Option value="1">Room Type</Option>
            <Option value="2">Max People</Option>
          </Select>
        </div>
        <div>
          <Button
            onClick={() => {
              form.resetFields()
              setIsEdit(false)
              setOpenModal(true)
            }}
            size="large"
            className="px-6 border bg-primary-blue rounded-xl text-white"
          >
            Create
          </Button>
        </div>
      </div>
      <div className="px-40">
        <MyTable dataSource={promotions.data} rowKey={(record) => record.id} columns={columns} />
      </div>
      <ModalForm title={isEdit ? 'Edit Coupon' : 'Add Coupon'} desc="" isopen={openModal} setIsOpen={setOpenModal}>
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          className="w-1/2"
          onFinish={(values) => {
            isEdit ? handleEdit(values) : handleCreate(values)
          }}
        >
          <Form.Item label="Coupon Code" name="code" rules={[{ required: true, message: 'Please input Coupon Code!' }]}>
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Discount Percentage"
            name="discount_percent"
            rules={[{ required: true, message: 'Please input Discount Percentage!' }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please input Amount!' }]}>
            <Input type="number" size="large" className="w-full" />
          </Form.Item>

          <div className="col-span-1 md:col-span-3">
            <Form.Item
              name="start_date"
              label={<p className="font-bold">เวลาที่เริ่ม</p>}
              rules={[{ required: true, message: 'กรุณากรอกเวลาที่เริ่ม' }]}
              hasFeedback
            >
              <DatePicker allowClear={false} size="large" format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
          </div>

          <div className="col-span-1 md:col-span-3">
            <Form.Item
              name="expired_date"
              label={<p className="font-bold">เวลาที่สิ้นสุด</p>}
              rules={[{ required: true, message: 'กรุณากรอกเวลาที่สิ้นสุด' }]}
              hasFeedback
            >
              <DatePicker allowClear={false} size="large" format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
          </div>
          <Form.Item name="roomtype_id">
            <Checkbox.Group className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-2 text-center font-bold">
              {roomtype.data?.map((room: any) => {
                return (
                  <div key={room.id} className="col-span-1">
                    {room.name} <br />
                    <Checkbox value={room.id} />
                  </div>
                )
              })}
              {/* <div className="col-span-1">
                Deluxe <br />
                <Checkbox value="MTH" />
              </div> */}
            </Checkbox.Group>
          </Form.Item>
          <div className="flex justify-center">
            <Button
              onClick={() => {}}
              htmlType="submit"
              className="px-6 border border-primary-blue rounded-xl"
              size="large"
            >
              {isEdit ? 'Edit ' : 'Add'}
            </Button>
          </div>
        </Form>
      </ModalForm>
    </>
  )
}

export default StaffPromotion
