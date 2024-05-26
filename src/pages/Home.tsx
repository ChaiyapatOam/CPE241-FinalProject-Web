import { useNavigate } from 'react-router-dom'
import pic from '../assets/LoginPic.jpeg'
import { Button, Form, Input } from 'antd'

const Home = () => {
  const navigate = useNavigate()

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value)
  //   console.log(input)
  // }
  const onFinish = (values: any) => {
    console.log('Success:', values)
    navigate('/staff')
  }

  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 m-0 " id="side-bar">
        <img src={pic} alt="Hotel Pic" className="size-full " />
      </div>
      <div className="basis-1/2 flex flex-col justify-center items-center" id="Welcome-text">
        <div className="text-left">
          <h1 className="font-semibold text-2xl p">Welcome Back</h1>
          <p className="text-lg">Log in to management system of kabidgon hotel</p>
        </div>
        <Form layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} className="w-1/2">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          {/* <Form.Item className="flex justify-center">
            <Button type="default" size="large" className="!bg-orange !text-white" htmlType="submit">
              Login
            </Button>
          </Form.Item> */}
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            className="border rounded-md text-white bg-primary-blue mt-5 w-4/12"
          >
            Log In
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Home
