import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { ConfigProvider } from 'antd'
import { theme } from './utils/theme'
import StaffLayout from './pages/staff'
import StaffHome from './pages/staff/home'
import StaffRoomType from './pages/staff/RoomType'
import StaffPromotion from './pages/staff/promotion'
import StaffProduct from './pages/staff/product'
import StaffAvaliableRoom from './pages/staff/Avaliable_Room'
import StaffService from './pages/staff/Ser'
import StaffAssignMaid from './pages/staff/assignmaid'
import MaidChecking from './pages/maid/checkingService'
import MaidHistoryService from './pages/maid/historyService'
import MaidProductCharge from './pages/maid/productCharge'
import ManagerStaffManage from './pages/manager/staffManage'
import ReceptReserve from './pages/reception/reserv'
import ReceptPayment from './pages/reception/allPayment'
import Payment from './pages/reception/payment'
import Dashboard from './pages/manager/Dashboard'
import StaffAllService from './pages/staff/allService'
import StaffHistoryBooking from './pages/staff/historyBooking'
import ReceptAddServiceRoom from './pages/reception/addServiceRoom'

const App = () => {
  return (
    <Router>
      <ConfigProvider theme={theme}>
        <main className="font-IBM bg-slate-50 text-dark-gray min-h-dvh">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="staff" element={<StaffLayout />}>
              <Route index element={<Navigate replace to="/staff/avaliable" />} />
              <Route path="roomtype" element={<StaffRoomType />} />
              <Route path="promotion" element={<StaffPromotion />} />
              <Route path="all-service" element={<StaffAllService />} />
              <Route path="service" element={<StaffService />} />
              <Route path="product" element={<StaffProduct />} />
              <Route path="avaliable" element={<StaffAvaliableRoom />} />
              <Route path="assign-maid" element={<StaffAssignMaid />} />
              <Route path="history-booking" element={<StaffHistoryBooking />} />
            </Route>

            <Route path="maid" element={<StaffLayout />}>
              <Route index element={<Navigate replace to="/maid/checking-service" />} />
              <Route path="checking-service" element={<MaidChecking />} />
              <Route path="historyService" element={<MaidHistoryService />} />
              <Route path="productCharge" element={<MaidProductCharge />} />
            </Route>

            <Route path="reception" element={<StaffLayout />}>
              {/* <Route index element={<Navigate replace to="/reception/reservation" />} /> */}
              <Route path="reservation" element={<ReceptReserve />} />
              <Route path="payment-booking" element={<ReceptPayment />} />
              <Route path="payment" element={<Payment />} />
              <Route path="room-service" element={<ReceptAddServiceRoom />} />
            </Route>

            <Route path="manager" element={<StaffLayout />}>
              <Route index element={<StaffHome />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="staff-manage" element={<ManagerStaffManage />} />
            </Route>
          </Routes>
        </main>
      </ConfigProvider>
    </Router>
  )
}

export default App
