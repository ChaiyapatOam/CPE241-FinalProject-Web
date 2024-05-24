import { Modal } from 'antd'
import './index.css'

type Props = {
  isopen: boolean
  setIsOpen: (value: React.SetStateAction<boolean>) => void
  title: string
  desc: string
  onSave?: (params: any) => any
  children?: React.ReactNode
}

const ModalForm = (props: Props) => {
  return (
    <Modal
      centered
      open={props.isopen}
      title={props.title}
      onCancel={() => props.setIsOpen(false)}
      width={600}
      footer={[]}
    >
      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-y-4 p-6">
        <p className="text-base text-gray-600">{props.desc}</p>
        {props.children}
      </div>

      {/* footer button */}
      {/* <div className="flex justify-between gap-x-6 p-4">
        <button
          className="bg-dark-grey hover:bg-black text-white px-4 py-2.5  font-bold rounded-2xl w-full "
          onClick={() => {
            props.setIsOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={(e) => {
            props.onSave(e);
            props.setIsOpen(false);
          }}
          className="bg-orange hover:bg- px-4 py-2.5 text-white font-bold rounded-2xl w-full"
        >
          Confirm
        </button>
      </div> */}
    </Modal>
  )
}

export default ModalForm
