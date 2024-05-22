import { Button, Form, Input, Select } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import MyTable from '@/components/Table'
import ModalForm from '@/components/ModalForm'

const { Search } = Input
const { Option } = Select

const StaffProduct = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectProduct, setSelectProduct] = useState({} as any)
  const formRef = useRef(null)
  const [form] = Form.useForm()

  const handleCreateProduct = (values: any) => {
    setOpenModal(false)
    console.log(values)
  }

  const handleCreateCategory = (values: any) => {
    setOpenModal2(false)
    console.log(values)
  }

  const handleEdit = (values: any) => {
    console.log(values)
  }

  //   const handleDelete = (values: any) => {
  //     console.log(values);
  //   };

  useEffect(() => {
    form.setFieldsValue({ ...selectProduct })
  }, [selectProduct])

  const Products = [
    {
      id: '1',
      name: 'Coca Cola',
      price: 20,
      quantity: 20,
      category: 'Drink',
    },
    {
      id: '2',
      name: 'Pepsi',
      price: 15,
      quantity: 200,
      category: 'Drink',
    },
    {
      id: '3',
      name: 'Fanta',
      price: 20,
      quantity: 20,
      category: 'Drink',
    },
  ]

  const category = [
    {
      id: '1',
      name: 'Drink',
    },
    {
      id: '2',
      name: '18+ Item',
    },
    {
      id: '3',
      name: 'Snack',
    },
  ]

  const categoryColumns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'center',
    },
    {
      key: 'x',
      render: (e) => (
        <div className="flex justify-center gap-x-4">
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

  const productColumns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      align: 'center',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      align: 'center',
    },
    {
      key: 'x',
      render: (e) => (
        <div className="flex justify-center gap-x-4">
          <Button
            onClick={() => {
              setSelectProduct(e)
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

  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center place-items-center gap-4 p-6">
        <div className="col-span-1">
          <Search
            placeholder="Category name.."
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
              setOpenModal2(true)
            }}
            size="large"
            className="px-6 border border-primary-blue rounded-xl"
          >
            Create category
          </Button>
        </div>
      </div>
      <div className="px-60">
        <MyTable dataSource={category} rowKey={(record) => record.id} columns={categoryColumns} />
      </div>
      <div className="grid grid-cols-3 justify-center items-center place-items-center gap-4 p-6 ">
        <div className="col-span-1">
          <Search
            placeholder="Product name.."
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch)
            }}
            style={{ width: 200 }}
          />
        </div>
        <div className="col-span-1 w-8/12">
          <label className="ml-10 mr-3">Category</label>
          <Select
            className="w-1/2"
            size="large"
            labelInValue
            onChange={(e) => {
              console.log(e.label)
            }}
          >
            <Option value="1">Drink</Option>
            <Option value="2">Snack</Option>
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
            className="px-6 border border-primary-blue rounded-xl"
          >
            Create product
          </Button>
        </div>
      </div>

      <div className="px-40">
        <MyTable dataSource={Products} rowKey={(record) => record.id} columns={productColumns} />
      </div>

      <ModalForm title={isEdit ? 'Edit Product' : 'Create Product'} desc="" isopen={openModal} setIsOpen={setOpenModal}>
        <Form
          form={form}
          ref={formRef}
          layout="vertical"
          onFinish={(values) => {
            isEdit ? handleEdit(values) : handleCreateProduct(values)
          }}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input Product name!' }]}>
            <Input type="text" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input Price!' }]}>
            <Input type="number" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Quantity" name="quantity" rules={[{ required: true, message: 'Please input quantity!' }]}>
            <Input type="number" size="large" className="w-full" />
          </Form.Item>

          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please input category!' }]}>
            <Select
              className="w-1/2"
              size="large"
              labelInValue
              onChange={(e) => {
                console.log(e.label)
              }}
            >
              <Option value="1">Drink</Option>
              <Option value="2">18+ Item</Option>
              <Option value="3">Snack</Option>
            </Select>
          </Form.Item>

          <Button
            onClick={() => {}}
            htmlType="submit"
            className="px-6 border border-primary-blue rounded-xl"
            size="large"
          >
            {isEdit ? 'Edit ' : 'Create'}
          </Button>
        </Form>
      </ModalForm>
      <ModalForm title={'Create Category'} desc="" isopen={openModal2} setIsOpen={setOpenModal2}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input Category name!' }]}>
          <Input type="text" size="large" className="w-full" />
        </Form.Item>
        <Button
          onClick={() => {}}
          htmlType="submit"
          className="px-6 border border-primary-blue rounded-xl"
          size="large"
        >
          Create Category
        </Button>
      </ModalForm>
    </>
  )
}

export default StaffProduct
