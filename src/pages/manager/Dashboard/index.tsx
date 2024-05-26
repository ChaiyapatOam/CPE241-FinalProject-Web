import { UserData } from './data'
import BarChart from '@/components/BarChart'
import { useState } from 'react'

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: 'Booking in a day',
        data: UserData.map((data) => data.numberofBooking),
        backgroundColor: ['#0B85FF'],
      },
    ],
  })

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="ml-10">
          <div className="flex flex-col ml-5">
            <div className="flex flex-row">
              <div className="bg-white rounded-lg drop-shadow-xl pb-3 mr-6">
                <h1 className="text-primary-blue font-bold ml-3 mt-3 text-2xl">Arrival Today</h1>
                <div className="flex flex-row">
                  <div>
                    <div className="bg-accent rounded-full w-28 h-28 flex justify-center drop-shadow-lg ml-3 mr-3">
                      <div className="bg-white rounded-full w-20 h-20 mt-4 ">
                        <h1 className="p-6 font-semibold text-3xl">03</h1>
                      </div>
                    </div>
                    <h1 className="ml-10 mt-2 text-xl font-semibold">Luxury</h1>
                  </div>
                  <div>
                    <div className="bg-accent rounded-full w-28 h-28 flex justify-center drop-shadow-lg ml-3 mr-3">
                      <div className="bg-white rounded-full w-20 h-20 mt-4 ">
                        <h1 className="p-6 font-semibold text-3xl">03</h1>
                      </div>
                    </div>
                    <h1 className="ml-10 mt-2 text-xl font-semibold">Luxury</h1>
                  </div>
                  <div>
                    <div className="bg-accent rounded-full w-28 h-28 flex justify-center drop-shadow-lg ml-3 mr-3">
                      <div className="bg-white rounded-full w-20 h-20 mt-4 ">
                        <h1 className="p-6 font-semibold text-3xl">03</h1>
                      </div>
                    </div>
                    <h1 className="ml-10 mt-2 text-xl font-semibold">Luxury</h1>
                  </div>
                </div>
              </div>
              <div className="bg-secondary  rounded-lg flex flex-col w-5/12 ml-5 drop-shadow-xl">
                <h1 className="text-primary-blue text-right mr-3 mt-3 text-2xl font-semibold">Hot Items of months</h1>{' '}
                <h1 className="text-accent text-right mr-3">July 2024</h1>
                <div className="flex flex-row justify-between">
                  <h1 className="basis-1/4 text-primary-blue ml-3 font-semibold">Luxury</h1>{' '}
                  <h1 className="basis-2/4">Condom</h1> <h1 className="mr-3">32</h1>
                </div>
                <div className="flex flex-row justify-between">
                  <h1 className="basis-1/4 text-primary-blue ml-3">Luxury</h1> <h1 className="basis-2/4">Condom</h1>{' '}
                  <h1 className="mr-3">32</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <div className="basis-7/12 flex flex-col">
                <div className="flex flex-row">
                  <div className="basis-1/5 bg-primary-blue rounded-lg drop-shadow-xl py-2">
                    <h1 className="ml-3 mt-3 text-secondary font-semibold text-xl">Hot Booking</h1>
                    <h1 className="ml-3 text-white font-semibold">Luxury</h1>
                    <div className="bg-accent rounded-full w-24 h-24 flex justify-center drop-shadow-lg mx-8">
                      <div className="bg-white rounded-full w-20 h-20 mt-2 ">
                        <h1 className="p-6 font-semibold text-2xl">03</h1>{' '}
                      </div>
                    </div>
                    <h1 className="ml-7 mt-1">Persons a trip</h1>
                  </div>
                  <div className="w-9/12 bg-white rounded-lg mx-4 drop-shadow-xl p-3">
                    <h1 className="text-2xl font-semibold ml-3 mt-1">Latest booking in 7 days</h1>
                    <BarChart chartData={userData} />
                  </div>
                </div>
                <div className="mt-5 mr-4">
                  <div className="w-80% bg-primary-blue rounded-lg drop-shadow-xl p-3">
                    <h1 className="text-2xl ml-3 mt-1 font-semibold text-white">Top's check in date</h1>
                    <div className="grid grid-rows-3 grid-flow-col gap-y-4 mt-2 ml-2">
                      <div className="flex flex-row items-center">
                        <div className="bg-secondary rounded-full w-10 h-10 mx-2">
                          <h1 className="p-2 ml-1 font-semibold text-lg text-primary-blue">1</h1>{' '}
                        </div>
                        <div className="text-white mr-8">13/02/2004</div>
                        <div className="text-secondary">32 Times</div>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="bg-secondary rounded-full w-10 h-10 mx-2">
                          <h1 className="p-2 ml-1 font-semibold text-lg text-primary-blue">2</h1>{' '}
                        </div>
                        <div className="text-white mr-8">13/02/2004</div>
                        <div className="text-secondary">32 Times</div>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="bg-secondary rounded-full w-10 h-10 mx-2">
                          <h1 className="p-2 ml-1 font-semibold text-lg text-primary-blue">3</h1>{' '}
                        </div>
                        <div className="text-white mr-8">13/02/2004</div>
                        <div className="text-secondary">32 Times</div>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="bg-secondary rounded-full w-10 h-10 mx-2">
                          <h1 className="p-2 ml-1 font-semibold text-lg text-primary-blue">4</h1>{' '}
                        </div>
                        <div className="text-white mr-8">13/02/2004</div>
                        <div className="text-secondary">32 Times</div>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="bg-secondary rounded-full w-10 h-10 mx-2">
                          <h1 className="p-2 ml-1 font-semibold text-lg text-primary-blue">5</h1>{' '}
                        </div>
                        <div className="text-white mr-8">13/02/2004</div>
                        <div className="text-secondary">32 Times</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg drop-shadow-xl h-full p-3 flex flex-col">
                <h1 className="text-2xl ml-3 mt-3 font-semibold">Recent Booking</h1>
                <div className="m-3 flex flex-row">
                  <div className="bg-primary-blue rounded-full w-6 h-6 blur"> </div>
                  <div className="ml-5">
                    <h1 className="font-semibold text-lg">R101 Luxury</h1>
                    <h1>kanitsorn Darunaitorn</h1>
                    <h1 className="font-medium">BookingID #12345</h1>
                  </div>
                </div>
                <div className="m-3 flex flex-row">
                  <div className="bg-primary-blue rounded-full w-6 h-6 blur"> </div>
                  <div className="ml-5">
                    <h1 className="font-semibold text-lg">R101 Luxury</h1>
                    <h1>kanitsorn Darunaitorn</h1>
                    <h1 className="font-medium">BookingID #12345</h1>
                  </div>
                </div>
                <div className="m-3 flex flex-row">
                  <div className="bg-primary-blue rounded-full w-6 h-6 blur"> </div>
                  <div className="ml-5">
                    <h1 className="font-semibold text-lg">R101 Luxury</h1>
                    <h1>kanitsorn Darunaitorn</h1>
                    <h1 className="font-medium">BookingID #12345</h1>
                  </div>
                </div>
                <div className="m-3 flex flex-row">
                  <div className="bg-primary-blue rounded-full w-6 h-6 blur"> </div>
                  <div className="ml-5">
                    <h1 className="font-semibold text-lg">R101 Luxury</h1>
                    <h1>kanitsorn Darunaitorn</h1>
                    <h1 className="font-medium">BookingID #12345</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
