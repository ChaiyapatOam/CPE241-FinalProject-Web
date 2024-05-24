import { Link } from 'react-router-dom'
import pic from '../assets/LoginPic.jpeg'

const Home = () => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value)
  //   console.log(input)
  // }

  return (
    // <div className="p-10">
    //   <h1 className="text-xl font-bold">Hello Welcome to Hotel Califonia</h1>

    //   <li className="grid underline text-primary-blue">
    //     <Link to="/staff">Staff</Link>
    //     <Link to="/maid">Maid</Link>
    //     <Link to="/reception/reservation">Reception</Link>
    //     <Link to="/manager/dashboard">Manager Dashboard</Link>
    //   </li>
    // </div>
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 m-0 " id="side-bar" >
        <img src={pic} alt="Hotel Pic" className="size-full " />
      </div>
      <div className="basis-1/2 flex flex-col justify-center items-center" id="Welcome-text">
        <div className="text-left">
            <h1 className="font-semibold text-2xl p">Welcome Back</h1>
            <p className="text-lg" >Log in to management system of kabidgon hotel</p>
        </div>
        <div className='flex flex-col w-4/12 text-xl my-2'>
            <label>Email</label>
            <input type="email" className='border rounded-sm'/>
            <label>Password</label>
            <input type="password" className='border rounded-sm'/>
        </div>
        <button type="submit" className="border rounded-md text-white bg-primary-blue mt-5 pt-2 pb-2 w-4/12" >
            Log In
        </button>
    </div>
    </div>
  )
}

export default Home
