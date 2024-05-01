type Props = {
  name: string;
  onClick: () => void;
};

const MyButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="border border-blue-500 font-bold cursor-pointer focus:bg-blue-500 focus:text-white hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-black transition-colors"
    >
      MyButton {props.name}
    </button>
  );
};

export default MyButton;
