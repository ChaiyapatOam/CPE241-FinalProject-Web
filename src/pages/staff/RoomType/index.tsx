import { Button, Form, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'
import { useFetch } from '@/services/queries'
import Loading from '@/components/Loading'
import { useCreate } from '@/services/useCreate'

const { Search } = Input
type RoomType = {
  id: string
  name: string
  max_people: number
  price: number
}

const StaffRoomType = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectedRoomType, setSelectedRoomType] = useState({} as any)
  const formRef = useRef(null)
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ ...selectedRoomType })
  }, [selectedRoomType])

  const roomtype = useFetch({ url: '/api/room/roomtype', key: 'roomtype' })
  const createRoomType = useCreate<RoomType>({ url: '/api/room/roomtype', key: 'roomtype' })

  const handleCreate = (values: any) => {
    createRoomType.mutate(values)
    setOpenModal(false)
  }

  const handleEdit = (values: any) => {
    console.log(values)
  }

  const columns: ColumnsType = [
    {
      title: 'RoomTypeID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'RoomType',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'MaxPeople',
      dataIndex: 'max_people',
      align: 'center',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
    },
    {
      key: 'x',
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectedRoomType(e)
              setIsEdit(true)
              setOpenModal(true)
            }}
            className="px-6 border border-primary-blue rounded-xl"
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            style={{ color: 'red' }}
            type="text"
            onClick={() => {}}
            className="px-6 rounded-xl"
          />
        </div>
      ),
      align: 'center',
    },
  ]

  if (roomtype.isLoading) return <Loading />
  return (
    <>
      <div className="flex flex-row justify-evenly ">
        <div className="col-span-1">
          <Search
            placeholder="Room Type Name.."
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
            }}
            style={{ width: 200 }}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              form.resetFields()
              setIsEdit(false)
              setOpenModal(true)
            }}
            size="large"
            className="px-6 border border-primary-blue rounded-xl"
          >
            Create
          </Button>
        </div>
      </div>
      <div className="px-60">
        <MyTable dataSource={roomtype.data} rowKey={(record) => record.id} columns={columns} />
      </div>
      <ModalForm
        title={isEdit ? 'Edit Room Type' : 'Add Room Type'}
        desc=""
        isopen={openModal}
        setIsOpen={setOpenModal}
        // onSave={handleEdit}
      >
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            isEdit ? handleEdit(values) : handleCreate(values)
          }}
        >
          <Form.Item label="Room Type" name="name" rules={[{ required: true, message: 'Please input Room Type!' }]}>
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Max People"
            name="max_people"
            rules={[{ required: true, message: 'Please input Max People!' }]}
          >
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input Price!' }]}>
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Button htmlType="submit" className="px-6 border border-primary-blue rounded-xl" size="large">
            {isEdit ? 'Edit ' : 'Add'}
          </Button>
        </Form>
      </ModalForm>
    </>
  )
}

export default StaffRoomType
