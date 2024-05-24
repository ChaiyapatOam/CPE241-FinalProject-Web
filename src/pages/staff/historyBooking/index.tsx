import { Input, Select } from 'antd'

const { Search } = Input

const AllService = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-4/5 flex flex-col items-center mr-10">
          <div className="flex flex-row items-center w-8/12 mb-2">
            <div className="basis-2/4 flex flex-row">
              <label className="mr-3 place-content-center">Search</label>
              <Search
                placeholder="Guest name, Booking, Room.."
                allowClear
                onSearch={(onSearch) => {
                  console.log(onSearch)
                }}
                style={{ width: 200 }}
              />
            </div>
            <div className="basis-2/4 flex flex-row">
              <label className="place-content-center">Sort by</label>
              <Select
                className="ml-3"
                size="large"
                labelInValue
                placeholder="lastest booking"
                onChange={(e) => {
                  console.log(e.label)
                }}
              >
                <Select.Option value="1">Lastest booking</Select.Option>
                <Select.Option value="2">Oldest booking</Select.Option>
                <Select.Option value="3">Recently check in</Select.Option>
              </Select>
            </div>
          </div>
          <div className="bg-white w-7/12 rounded-xl drop-shadow-xl my-5 ">
            <div className="grid grid-cols-3 items-center">
              <div className="col-span-2 rounded-l-xl flex flex-col pl-3 py-3">
                <div className="flex flex-row">
                  <h1 className="text-xl font-medium">BookingID : #1234 &nbsp; &nbsp;</h1>{' '}
                  <h1 className="text-lg">RoomID :R001</h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="font-semibold">Guest : 01232</h1> <h1> &nbsp; Kanitsorn Darunaitorn</h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="font-medium">Maid : &nbsp;</h1> <h1>Kanitsorn Darunaitorn </h1>{' '}
                </div>
                <div className="flex flex-row">
                  <h1 className="font-medium">Phone : &nbsp;</h1> <h1>0902323231 &nbsp;&nbsp;</h1>{' '}
                  <h1 className="font-medium">No. of Guests : &nbsp;</h1> 3
                </div>
              </div>
              <div className="col-span-1 bg-primary-blue rounded-r-xl py-3 pr-3 text-right">
                <div className="text-white">
                  <h1 className="font-medium">Check in date :&nbsp;</h1> <h1>13/02/2023</h1>
                </div>
                <div className="text-white">
                  <h1 className="font-medium">Check out date &nbsp;</h1> <h1>13/02/2023</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-7/12 rounded-xl drop-shadow-xl my-5 ">
            <div className="grid grid-cols-3 items-center">
              <div className="col-span-2 rounded-l-xl flex flex-col pl-3 py-3">
                <div className="flex flex-row">
                  <h1 className="text-xl font-medium">BookingID : #1234 &nbsp; &nbsp;</h1>{' '}
                  <h1 className="text-lg">RoomID :R001</h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="font-semibold">Guest : 01232</h1> <h1> &nbsp; Kanitsorn Darunaitorn</h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="font-medium">Maid : &nbsp;</h1> <h1>Kanitsorn Darunaitorn </h1>{' '}
                </div>
                <div className="flex flex-row">
                  <h1 className="font-medium">Phone : &nbsp;</h1> <h1>0902323231 &nbsp;&nbsp;</h1>{' '}
                  <h1 className="font-medium">No. of Guests : &nbsp;</h1> 3
                </div>
              </div>
              <div className="col-span-1 bg-primary-blue rounded-r-xl py-3 pr-3 text-right">
                <div className="text-white">
                  <h1 className="font-medium">Check in date &nbsp;</h1> <h1>13/02/2023</h1>
                </div>
                <div className="text-white">
                  <h1 className="font-medium">Check out date &nbsp;</h1> <h1>13/02/2023</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-7/12 rounded-xl drop-shadow-xl my-5 ">
            <div className="grid grid-cols-3 items-center">
              <div className="col-span-2 rounded-l-xl flex flex-col pl-3 py-3">
                <div className="flex flex-row">
                  <h1 className="text-xl font-medium">BookingID : #1234 &nbsp; &nbsp;</h1>{' '}
                  <h1 className="text-lg">RoomID :R001</h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="font-semibold">Guest : 01232</h1> <h1> &nbsp; Kanitsorn Darunaitorn</h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="font-medium">Maid : &nbsp;</h1> <h1>Kanitsorn Darunaitorn </h1>{' '}
                </div>
                <div className="flex flex-row">
                  <h1 className="font-medium">Phone : &nbsp;</h1> <h1>0902323231 &nbsp;&nbsp;</h1>{' '}
                  <h1 className="font-medium">No. of Guests : &nbsp;</h1> 3
                </div>
              </div>
              <div className="col-span-1 bg-primary-blue rounded-r-xl py-3 pr-3 text-right">
                <div className="text-white">
                  <h1 className="font-medium">Check in date :&nbsp;</h1> <h1>13/02/2023</h1>
                </div>
                <div className="text-white">
                  <h1 className="font-medium">Check out date &nbsp;</h1> <h1>13/02/2023</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllService
