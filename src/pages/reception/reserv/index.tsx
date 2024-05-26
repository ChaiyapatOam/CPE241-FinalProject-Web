import Loading from '@/components/Loading'
import { useFetch } from '@/services/queries'
import { useCreate } from '@/services/useCreate'
import { Button, Checkbox, DatePicker, Form, FormInstance, Input, Select } from 'antd'
import { useRef, useState } from 'react'

const Reserve = () => {
  const formRef = useRef<FormInstance>(null)
  const [form] = Form.useForm()
  const rooms = useFetch({ url: '/api/room', key: 'room' })
  const roomtype = useFetch({ url: '/api/room/roomtype', key: 'roomtype' })
  const [value, setValue] = useState('')

  function handleChange(e: any) {
    console.log(value)
    form.setFieldValue('room_id', e.target.value)
    setValue(e.target.value)
  }
  // const services = useFetch({ url: '/api/service', key: 'service' })
  const createBooking = useCreate({ url: '/api/booking', key: 'booking' })

  if (rooms.isLoading && roomtype.isLoading) return <Loading />

  const onSubmit = (values: any) => {
    values.reception_staff = 1
    console.log(values)
    createBooking.mutate(values)
  }

  return (
    <>
      <div className="flex flex-row justify-center ">
        <div className="basis-3/4">
          <Form
            layout="vertical"
            className="w-full"
            initialValues={{ title: { value: 'Select a title' } }}
            onFinish={onSubmit}
            ref={formRef}
            form={form}
            scrollToFirstError
          >
            <div className="grid grid-cols-2">
              <div className="col-span-1 grid">
                <div className="col-span-1 grid">
                  <h1 className="text-dark-grey text-xl underline underline-offset-8 decoration-primary-blue m-5 mb-8">
                    Check Avaliable Room
                  </h1>
                  <Form.Item
                    label="Check in date"
                    name="check_in_date"
                    className="w-6/12"
                    rules={[{ required: true, message: 'Please input Phone number!' }]}
                  >
                    <DatePicker allowClear={false} size="large" format="DD/MM/YYYY" className="w-full" />
                  </Form.Item>
                  <Form.Item
                    label="Check out date"
                    name="check_out_date"
                    className="w-6/12"
                    rules={[{ required: true, message: 'Please input Phone number!' }]}
                  >
                    <DatePicker allowClear={false} size="large" format="DD/MM/YYYY" className="w-full" />
                  </Form.Item>
                  <Form.Item
                    label="Room Type"
                    name="room_id"
                    rules={[{ required: true, message: 'Please input Phone number!' }]}
                    className="w-6/12"
                  >
                    <Select
                      className="w-3/12"
                      size="large"
                      labelInValue
                      onChange={(e) => {
                        console.log(e.label)
                      }}
                    >
                      {roomtype.data?.map((room: any) => {
                        return (
                          <Select.Option key={room.id} value={room.id}>
                            {' '}
                            {room.name}
                          </Select.Option>
                        )
                      })}
                    </Select>
                  </Form.Item>

                  <Button
                    onClick={() => {}}
                    htmlType="button"
                    className="px-6 border bg-primary-blue rounded-xl text-white justify-self-start mr-10"
                    size="large"
                  >
                    {' '}
                    See avaliable room
                  </Button>
                </div>
                <div className="bg-white mt-10 mr-10 border rounded-xl ">
                  <h1 className="text-dark-grey text-xl underline underline-offset-8 decoration-primary-blue m-5 mb-8">
                    Avaliable Rooms
                  </h1>
                  <div className="pl-5 flex flex-col">
                    {rooms.data?.map((room: any) => {
                      return (
                        <div className="flex flex-col">
                          <Checkbox key={room.id} onChange={handleChange} checked={room.id == value} value={room.id}>
                            {room.number} {room.roomtype}
                          </Checkbox>
                        </div>
                      )
                    })}

                    {/* <Form.Item name="fieldA" valuePropName="checked">
                      <input type="checkbox" />
                    </Form.Item>
                    <Form.Item name="fieldA" valuePropName="checked">
                      <input type="checkbox" value="Boat" />
                    </Form.Item>
                    <Form.Item name="fieldA" valuePropName="checked">
                      <input type="checkbox" value="Oam" />
                    </Form.Item> */}
                  </div>
                </div>
              </div>
              <div className="col-span-1 grid">
                <h1 className="text-dark-grey text-xl underline underline-offset-8 decoration-primary-blue m-5 mb-8">
                  Reservation
                </h1>
                <Form.Item
                  label="Phone number"
                  name="phone"
                  rules={[{ required: true, message: 'Please input Phone number!' }]}
                >
                  <Input type="text" size="large" className="w-6/12 rounded-md" />
                </Form.Item>
                <Form.Item
                  label="First Name"
                  name="first_name"
                  rules={[{ required: true, message: 'Please input First name!' }]}
                >
                  <Input type="text" size="large" className="w-6/12 rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="last_name"
                  rules={[{ required: true, message: 'Please input Last name!' }]}
                >
                  <Input type="text" size="large" className="w-6/12 rounded-md" />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input Last name!' }]}>
                  <Input type="email" size="large" className="w-6/12 rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Number of Guests"
                  name="guest_number"
                  rules={[{ required: true, message: 'Please input number!' }]}
                >
                  <Input type="number" size="large" className="w-6/12 rounded-md" />
                </Form.Item>
                <Button
                  onClick={() => {}}
                  htmlType="submit"
                  className="px-6 border bg-primary-blue rounded-xl place-items-center text-white w-4/12"
                  size="large"
                >
                  {' '}
                  Reserve
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Reserve
