import { Button, Form, Input, Select } from 'antd'
import { useRef, useState } from 'react'
import ModalForm from '@/components/ModalForm'
import { useFetch } from '@/services/queries'

const MaidProductCharge = () => {
  const [openModal, setOpenModal] = useState(false)
  const formRef = useRef(null)
  const [form] = Form.useForm()

  const rooms = useFetch({ url: '/api/room', key: 'room' })
  const products = useFetch({ url: '/api/product', key: 'product' })

  const handleCreate = (values: any) => {
    setOpenModal(false)
    console.log(values)
  }

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="basis-3/4">
          <div className="bg-white rounded-lg drop-shadow-md ml-10 mr-10">
            <div className="bg-primary-blue p-4 text-secondary rounded-t-lg ">
              <h1 className="font-bold">Create Product Ordering</h1>
            </div>
            <div className="flex flex-col ml-3">
              <div className="text-right mr-5 mb-5 mt-5">
                <Button
                  onClick={() => {
                    setOpenModal(true)
                  }}
                  className="px-6 border bg-primary-blue rounded-md text-white ml-3"
                >
                  Add Product Order
                </Button>
              </div>
            </div>
          </div>
          <ModalForm title={'Add Product Order'} desc="" isopen={openModal} setIsOpen={setOpenModal}>
            <Form
              form={form}
              ref={formRef}
              layout="vertical"
              onFinish={(values) => {
                handleCreate(values)
              }}
            >
              <Form.Item
                label="RoomID"
                name="room_id"
                rules={[{ required: true, message: 'Please input Product name!' }]}
              >
                <Select
                  className="w-1/2"
                  size="large"
                  labelInValue
                  onChange={(e) => {
                    console.log(e.label)
                  }}
                >
                  {rooms.data?.map((room: any) => {
                    return <Select.Option value={room.id}>{room.number}</Select.Option>
                  })}
                </Select>
              </Form.Item>

              <Form.Item
                label="ProductID"
                name="product_id"
                rules={[{ required: true, message: 'Please input Product name!' }]}
              >
                <Select
                  className="w-1/2"
                  size="large"
                  labelInValue
                  onChange={(e) => {
                    console.log(e.label)
                  }}
                >
                  {products.data?.map((product: any) => {
                    return <Select.Option value={product.id}>{product.name}</Select.Option>
                  })}
                </Select>
              </Form.Item>

              <Form.Item label="Quanity" name="quantity" rules={[{ required: true, message: 'Please input Price!' }]}>
                <Input type="number" size="large" className="w-full" />
              </Form.Item>

              <Button
                onClick={() => {}}
                htmlType="submit"
                className="px-6 mt-3 border border-primary-blue rounded-xl w-full"
                size="large"
              >
                {'Add order'}
              </Button>
            </Form>
          </ModalForm>
        </div>
      </div>
    </>
  )
}

export default MaidProductCharge
