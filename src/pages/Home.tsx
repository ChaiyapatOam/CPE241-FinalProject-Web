import { useState } from "react";
import MyButton from "../components/Button";

const Home = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const Click = () => {
    setCount(count + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div className="p-10 text-2xl">
      <div>dsfsdf</div>
      <br />
      <button
        onClick={Click}
        className="border border-red-500 font-bold cursor-pointer focus:bg-red-500 focus:text-white hover:bg-red-500 hover:text-white px-4 py-2 rounded-md text-red-500 transition-colors w-32"
      >
        Click
        {count}
      </button>
      <MyButton name={"first example"} onClick={Click} />
      {count > 5 ? <p>true</p> : <p>false</p>}
      <input
        onChange={handleChange}
        className="border border-black rounded-2xl p-1"
        type="text"
      />
      <p className="text-base">{input}</p>
    </div>
  );
};

export default Home;
