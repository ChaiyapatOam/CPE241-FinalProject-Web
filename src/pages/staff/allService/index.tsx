import StaffNavBar from "@/components/StaffNavBar"
import { Input, Select } from "antd";



const { Search } = Input;

const AllService = () => {
    return (
        <>
         <div className="flex flex-row">
        <div className="basis-1/5">
        <StaffNavBar />
        </div>
      <div className="basis-4/5 flex flex-col items-center mr-10">
        <div className="flex flex-row items-center w-8/12 mb-2">
        <div className="basis-2/4 flex flex-row">
          <label className="mr-3 place-content-center" >Search</label>
          <Search
            placeholder="Maid ID"
            allowClear
            onSearch={(onSearch) => {
              console.log(onSearch);
            }}
            style={{ width: 200 }}
          />
        </div>
        <div className="basis-2/4 flex flex-row">
        <label className="place-content-center">Room Type</label>
            <Select
            className="ml-3"
            size="large"
            labelInValue
            placeholder="service name"
            onChange={(e) => {
              console.log(e.label);
            }}
            >
            <Option value="1">Regular</Option>
            <Option value="2">King Size</Option>
            <Option value="3">Deluxe</Option>
          </Select>
        </div>    
        </div>
        <div className="bg-white w-6/12 rounded-xl drop-shadow-xl my-5 ">
            <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 rounded-l-xl flex flex-col pl-3 py-3">
                    <div className="flex flex-row"><h1 className="text-xl font-medium">BookingID : #1234  &nbsp; &nbsp;</h1> <h1 className="text-lg">RoomID :R001</h1></div>
                    <div className="flex flex-row"><h1 className="font-semibold">Service :</h1> <h1> &nbsp; Spa massage</h1></div>
                    <div className="flex flex-row"><h1 className="font-medium">Maid :</h1> <h1>Kanitsorn Darunaitorn </h1> 
                    <h1 className="font-medium">&nbsp; &nbsp; &nbsp;Fee : 656</h1> </div>
                </div>
                <div className="col-span-1 bg-primary-blue rounded-r-xl py-3 pr-3 text-right">
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                </div>
            </div>
        </div>
        <div className="bg-white w-6/12 rounded-xl drop-shadow-xl my-5 ">
            <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 rounded-l-xl flex flex-col pl-3 py-3">
                    <div className="flex flex-row"><h1 className="text-xl font-medium">BookingID : #1234  &nbsp; &nbsp;</h1> <h1 className="text-lg">RoomID :R001</h1></div>
                    <div className="flex flex-row"><h1 className="font-semibold">Service :</h1> <h1> &nbsp; Spa massage</h1></div>
                    <div className="flex flex-row"><h1 className="font-medium">Maid :</h1> <h1>Kanitsorn Darunaitorn </h1> 
                    <h1 className="font-medium">&nbsp; &nbsp; &nbsp;Fee : 656</h1> </div>
                </div>
                <div className="col-span-1 bg-primary-blue rounded-r-xl py-3 pr-3 text-right">
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                </div>
            </div>
        </div>
        <div className="bg-white w-6/12 rounded-xl drop-shadow-xl my-5 ">
            <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 rounded-l-xl flex flex-col pl-3 py-3">
                    <div className="flex flex-row"><h1 className="text-xl font-medium">BookingID : #1234  &nbsp; &nbsp;</h1> <h1 className="text-lg">RoomID :R001</h1></div>
                    <div className="flex flex-row"><h1 className="font-semibold">Service :</h1> <h1> &nbsp; Spa massage</h1></div>
                    <div className="flex flex-row"><h1 className="font-medium">Maid :</h1> <h1>Kanitsorn Darunaitorn </h1> 
                    <h1 className="font-medium">&nbsp; &nbsp; &nbsp;Fee : 656</h1> </div>
                </div>
                <div className="col-span-1 bg-primary-blue rounded-r-xl py-3 pr-3 text-right">
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                </div>
            </div>
        </div>
        <div className="bg-white w-6/12 rounded-xl drop-shadow-xl my-5 ">
            <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 rounded-l-xl flex flex-col pl-3 py-3">
                    <div className="flex flex-row"><h1 className="text-xl font-medium">BookingID : #1234  &nbsp; &nbsp;</h1> <h1 className="text-lg">RoomID :R001</h1></div>
                    <div className="flex flex-row"><h1 className="font-semibold">Service :</h1> <h1> &nbsp; Spa massage</h1></div>
                    <div className="flex flex-row"><h1 className="font-medium">Maid :</h1> <h1>Kanitsorn Darunaitorn </h1> 
                    <h1 className="font-medium">&nbsp; &nbsp; &nbsp;Fee : 656</h1> </div>
                </div>
                <div className="col-span-1 bg-primary-blue rounded-r-xl py-3 pr-3 text-right">
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                <div className="text-white"><h1 className="font-medium">Request Time</h1> <h1>13/02/2023 12:56:04</h1></div>
                </div>
            </div>
        </div>
        
        </div>
        </div>
        
        </>
    )
}

export default AllService ;