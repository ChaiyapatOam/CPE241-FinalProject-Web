import { Button, Form, Input, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'

const { Search } = Input
const { Option } = Select

const StaffAssignMaid = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectedMaid, setSelectedMaid] = useState({} as any)
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
    form.setFieldsValue({ ...selectedMaid })
  }, [selectedMaid])

  const Room = [
    {
      id: 'M001',
      name: 'Chaiyapat Meejingerbell',
      roomTypeID: 'T001',
    },
    {
      id: 'M002',
      name: 'Panuruj Udomwittayasaass',
      roomTypeID: 'T002',
    },
    {
      id: 'M003',
      name: 'Waviex Teehidmaiwai',
      roomTypeID: 'T003',
    },
    {
      id: 'M003',
      name: 'Waviex Teehidmaiwai',
      roomTypeID: 'T003',
    },
    {
      id: 'M003',
      name: 'Waviex Teehidmaiwai',
      roomTypeID: 'T003',
    },
    {
      id: 'M003',
      name: 'Waviex Teehidmaiwai',
      roomTypeID: 'T003',
    },
  ]

  const columns: ColumnsType = [
    {
      title: 'Maid id',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'Room Type ID',
      dataIndex: 'roomTypeID',
      align: 'center',
    },
    {
      key: 'x',
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectedMaid(e)
              setIsEdit(true)
              setOpenModal(true)
            }}
            className="px-6 border border-primary-blue rounded-md"
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
      <div className="flex flex-row justify-center">
        <div className="basis-3/4">
          <div className="grid grid-cols-2 justify-center items-center place-items-center gap-4 p-6 ">
            <div className="col-span-1">
              <label className="mr-3">Search</label>
              <Search
                placeholder="Maid ID"
                allowClear
                onSearch={(onSearch) => {
                  console.log(onSearch)
                }}
                style={{ width: 200 }}
              />
            </div>
            <div className="col-span-1 w-6/12">
              <label className="mr-3">Room Type</label>
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
          </div>
          <div className="px-40 drop-shadow-md rounded">
            <MyTable dataSource={Room} rowKey={(record) => record.id} columns={columns} />
          </div>
        </div>
        <ModalForm
          // title={isEdit ? "Edit Coupon" : "Add Coupon"}
          title={'Change room type'}
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
            <div>
              <label className="mr-3 block">Room Type</label>
              <Select
                className="w-full mb-5"
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
      </div>
    </>
  )
}

export default StaffAssignMaid
