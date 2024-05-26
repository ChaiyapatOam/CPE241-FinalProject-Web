import { Button, Form, Input, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'
import { useFetch } from '@/services/queries'
import { useCreate } from '@/services/useCreate'
import Loading from '@/components/Loading'

const { Search } = Input
const { Option } = Select

const ReceptAddRoomService = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState({} as any)
  const formRef = useRef(null)
  const [form] = Form.useForm()

  const bookings = useFetch({ url: '/api/booking', key: 'booking' })
  const services = useFetch({ url: '/api/service', key: 'service' })
  const createRoomService = useCreate({ url: '/api/service', key: 'booking' })

  useEffect(() => {
    form.setFieldsValue({ ...selectedBooking })
  }, [selectedBooking])
  if (bookings.isLoading) return <Loading />

  const handleCreate = (values: any) => {
    createRoomService.mutate(values)
    setOpenModal(false)
  }

  const columns: ColumnsType = [
    {
      title: 'Room ID',
      dataIndex: 'room_number',
      align: 'center',
    },
    {
      title: 'Guest Name',
      dataIndex: 'first_name',
      align: 'center',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      align: 'center',
    },
    {
      title: 'Booking ID',
      dataIndex: 'id',
      align: 'center',
    },
    {
      key: 'x',
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectedBooking(e)

              setOpenModal(true)
            }}
            className="px-6 border border-primary-blue rounded-xl"
          >
            Call Service
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
          <label className="mr-3">Search : </label>
          <Search
            placeholder="Room ID"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
            }}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <div className="px-60">
        <MyTable dataSource={bookings.data} rowKey={(record) => record.id} columns={columns} />
      </div>
      <ModalForm title={'Call Room Service'} desc="" isopen={openModal} setIsOpen={setOpenModal}>
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            handleCreate(values)
          }}
          className="w-5/12"
        >
          <Form.Item label="Service" name="role" rules={[{ required: true, message: 'Please input Service!' }]}>
            <Select
              className=""
              size="large"
              labelInValue
              onChange={(e) => {
                console.log(e.label)
              }}
            >
              {services.data?.map((service: any) => {
                return <Option value={service.id}>{service.name}</Option>
              })}
            </Select>
          </Form.Item>

          <Button
            onClick={() => {}}
            htmlType="submit"
            className="px-6 border border-primary-blue rounded-xl text-primary-blue col-span-2 w-full"
            size="large"
          >
            Confirm
          </Button>
        </Form>
      </ModalForm>
    </>
  )
}

export default ReceptAddRoomService
