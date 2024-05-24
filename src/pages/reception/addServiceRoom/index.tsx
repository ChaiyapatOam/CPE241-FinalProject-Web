import { Button, Form, Input, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'

const { Search } = Input
const { Option } = Select

const ReceptAddRoomService = () => {
    const [openModal, setOpenModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [selectedRoomType, setSelectedRoomType] = useState({} as any)
    const formRef = useRef(null)
    const [form] = Form.useForm()

    const handleCreate = (values: any) => {
        setOpenModal(false)
    }

    const handleEdit = (values: any) => { }

    // const handleDelete = (values: any) => {};

    useEffect(() => {
        form.setFieldsValue({ ...selectedRoomType })
    }, [selectedRoomType])

    const RoomType = [
        {
            bookingId: '1',
            roomId: '2312',
            firstName: 'Chaiyapat',
            phone: '2321245454'
        },
        {
            bookingId: '1',
            roomId: '2312',
            firstName: 'Chaiyapat',
            phone: '2321245454'
        },
        {
            bookingId: '1',
            roomId: '2312',
            firstName: 'Chaiyapat',
            phone: '2321245454'
        },
        {
            bookingId: '1',
            roomId: '2312',
            firstName: 'Chaiyapat',
            phone: '2321245454'
        },
    ]

    const columns: ColumnsType = [
        {
            title: 'Room ID',
            dataIndex: 'roomId',
            align: 'center',
        },
        {
            title: 'Guest Name',
            dataIndex: 'firstName',
            align: 'center',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            align: 'center',
        },
        {
            title: 'Booking ID',
            dataIndex: 'bookingId',
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
                <MyTable dataSource={RoomType} rowKey={(record) => record.id} columns={columns} />
            </div>
            <ModalForm title={'Call Room Service'} desc="" isopen={openModal} setIsOpen={setOpenModal}>
                <Form
                    form={form}
                    ref={formRef}
                    layout="vertical"
                    onFinish={(values) => {
                        handleEdit(values)
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
                            <Option value="1">Maid</Option>
                            <Option value="2">Reception</Option>
                            <Option value="3">Staff</Option>
                        </Select>
                    </Form.Item>

                    <Button
                        onClick={() => { }}
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
