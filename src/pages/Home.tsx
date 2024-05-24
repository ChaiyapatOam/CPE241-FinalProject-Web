import { Link } from 'react-router-dom'

const Home = () => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value)
  //   console.log(input)
  // }

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Hello Welcome to Hotel Califonia</h1>

      <li className="grid underline text-primary-blue">
        <Link to="/staff">Staff</Link>
        <Link to="/maid">Maid</Link>
        <Link to="/reception/reservation">Reception</Link>
        <Link to="/manager/dashboard">Manager Dashboard</Link>
      </li>
    </div>
  )
}

export default Home
