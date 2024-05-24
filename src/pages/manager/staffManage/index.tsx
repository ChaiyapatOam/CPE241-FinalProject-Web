import { Button, Form, Input, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'

const { Search } = Input
const { Option } = Select

const ManagerStaffManage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectedRoomType, setSelectedRoomType] = useState({} as any)
  const formRef = useRef(null)
  const [form] = Form.useForm()

  const handleCreate = (values: any) => {
    setOpenModal(false)
  }

  const handleEdit = (values: any) => {}

  // const handleDelete = (values: any) => {};

  useEffect(() => {
    form.setFieldsValue({ ...selectedRoomType })
  }, [selectedRoomType])

  const RoomType = [
    {
      id: '1',
      firstName: 'Chaiyapat',
      lastName: 'Meejingerbell',
      role: 'Maid',
    },
    {
      id: '2',
      firstName: 'Chaiyapat',
      lastName: 'Meejingerbell',
      role: 'Maid',
    },
    {
      id: '3',
      firstName: 'Chaiyapat',
      lastName: 'Meejerbell',
      role: 'Reception',
    },
  ]

  const columns: ColumnsType = [
    {
      title: 'EmployeeD',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      align: 'center',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      align: 'center',
    },
    {
      title: 'Role',
      dataIndex: 'role',
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
            placeholder="employee ID"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
            }}
            style={{ width: 200 }}
          />
        </div>
        <div className="col-span-1">
          {/* <label className="mr-3">Role :</label>
          <Select
            className="w-1/2"
            size="large"
            labelInValue
            onChange={(e) => {
              console.log(e.label)
            }}
          >
            <Option value="1">Maid</Option>
            <Option value="2">Reception</Option>
            <Option value="2">Employee</Option>
          </Select> */}
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
            Add employee
          </Button>
        </div>
      </div>
      <div className="px-60">
        <MyTable dataSource={RoomType} rowKey={(record) => record.id} columns={columns} />
      </div>
      <ModalForm title={'Edit employee information'} desc="" isopen={openModal} setIsOpen={setOpenModal}>
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            handleEdit(values)
          }}
          className="grid grid-cols-2 gap-3"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please input First name!' }]}
            className="basis-1/2"
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please input Last name!' }]}
            className="basis-1/2"
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please input role!' }]}>
            <Select
              className="w-1/2"
              size="large"
              labelInValue
              onChange={(e) => {
                console.log(e.label)
              }}
            >
              <Option value="1">Maid</Option>
              <Option value="2">Reception</Option>
              <Option value="3">Staff</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input phone number!' }]}
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input email!' }]}>
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Salary" name="salary" rules={[{ required: true, message: 'Please input salary!' }]}>
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input address!' }]}
            className="col-span-2"
          >
            <Input type="text" size="large" className="w-full" />
          </Form.Item>

          <Button
            onClick={() => {}}
            htmlType="submit"
            className="px-6 border border-primary-blue rounded-xl text-primary-blue col-span-2"
            size="large"
          >
            {isEdit ? 'Edit ' : 'Create'}
          </Button>
        </Form>
      </ModalForm>
    </>
  )
}

export default ManagerStaffManage
