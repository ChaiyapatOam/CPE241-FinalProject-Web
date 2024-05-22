import { Button, Form, TimePicker } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'

const MaidHistoryService = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectService, setSelectedService] = useState({} as any)
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
    form.setFieldsValue({ ...selectService })
  }, [selectService])

  const service = [
    {
      id: '1',
      service: 'Spa custard',
      requestTime: '12/01/2004 23:54:23',
      finishTime: '13/01/2004 23:67:12',
    },
    {
      id: '2',
      service: 'Spa custard',
      requestTime: '12/01/2004 23:54:23',
      finishTime: '13/01/2004 23:67:12',
    },
    {
      id: '3',
      service: 'Spa custard',
      requestTime: '12/01/2004 23:54:23',
      finishTime: '13/01/2004 23:67:12',
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
      title: 'Service Name',
      dataIndex: 'service',
      align: 'center',
    },
    {
      title: 'Request Time',
      dataIndex: 'requestTime',
      align: 'center',
    },
    {
      title: 'Finish Time',
      dataIndex: 'finishTime',
      align: 'center',
    },
  ]

  return (
    <>
      <div className="px-50">
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

export default MaidHistoryService
