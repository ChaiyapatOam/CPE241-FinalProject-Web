import { Button, Form, Input, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import MyTable from "@/components/Table";
import ModalForm from "@/components/ModalForm";
import StaffNavBar from "@/components/StaffNavBar";

const Reserve = () => {
  const room = [
    {
      title: 'R001',
    },
    {
      title: 'R002',
    },
    {
      title: 'R003',
    },
  ]
  return (
    <>
      <div className="flex flex-row justify-center ">
        <div className="basis-3/4">
          <div className="grid grid-cols-2">
            <div className="col-span-1 grid">
              <div className="col-span-1 grid">
                <h1 className="text-dark-grey text-xl underline underline-offset-8 decoration-primary-blue m-5 mb-8">
                  Check Avaliable Room
                </h1>
                <Form.Item
                  label="Check in date"
                  name="checkInDate"
                  rules={[{ required: true, message: 'Please input Phone number!' }]}
                >
                  <Input type="text" size="large" className="w-6/12 rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Check our date"
                  name="checkOutDate"
                  rules={[{ required: true, message: 'Please input Phone number!' }]}
                >
                  <Input type="text" size="large" className="w-6/12 rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Room Type"
                  name="roomType"
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
                    <Select.Option value="1">Regular</Select.Option>
                    <Select.Option value="2">King Size</Select.Option>
                    <Select.Option value="2">Deluxe</Select.Option>
                  </Select>
                </Form.Item>

                <Button
                  onClick={() => { }}
                  htmlType="submit"
                  className="px-6 border bg-primary-blue rounded-xl place-items-center text-white justify-self-center mr-10"
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
                <div className="pl-5">
                  <Form.Item name="fieldA" valuePropName="checked">
                    <input type='checkbox'/>
                  </Form.Item>
                  <Form.Item name="fieldA" valuePropName="checked">
                    <input type='checkbox' value="Boat" />
                  </Form.Item>
                  <Form.Item name="fieldA" valuePropName="checked">
                    <input type='checkbox' value="Oam" />
                  </Form.Item>
                  <Form.Item name="fieldA" valuePropName="checked">
                    <input type='checkbox' value="Oam" />
                  </Form.Item>
                  
                </div>

              </div>
            </div>
            <div className="col-span-1 grid">
              <h1 className="text-dark-grey text-xl underline underline-offset-8 decoration-primary-blue m-5 mb-8">
                Reservation
              </h1>
              <Form.Item
                label="Phone number"
                name="phone_number"
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
                name="numberOfGuest"
                rules={[{ required: true, message: 'Please input number!' }]}
              >
                <Input type="number" size="large" className="w-6/12 rounded-md" />
              </Form.Item>
              <Button
                onClick={() => { }}
                htmlType="submit"
                className="px-6 border bg-primary-blue rounded-xl place-items-center text-white w-4/12"
                size="large"
              >
                {' '}
                Reserve
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reserve
