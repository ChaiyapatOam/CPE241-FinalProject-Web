import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ConfigProvider } from "antd";
import { theme } from "./utils/theme";
import StaffLayout from "./pages/staff";
import StaffHome from "./pages/staff/home";
import StaffRoomType from "./pages/staff/RoomType";
import StaffPromotion from "./pages/staff/promotion";
import StaffProduct from "./pages/staff/product";
import StaffAvaliableRoom from "./pages/staff/Avaliable_Room";
import StaffService from "./pages/staff/Ser";
import StaffAssignMaid from "./pages/staff/assignmaid"
import MaidChecking from "./pages/maid/checkingService";
import MaidHistoryService from "./pages/maid/historyService";
import MaidProductCharge from "./pages/maid/productCharge";
import ManagerStaffManage from "./pages/manager/staffManage";
import ReceptReserve from "./pages/reception/reserv";
import ReceptPayment from "./pages/reception/allPayment";
import Payment from "./pages/reception/payment";

const App = () => {
  return (
    <Router>
      <ConfigProvider theme={theme}>
        <main className="font-IBM bg-slate-50 min-h-dvh">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="staff" element={<StaffLayout />}>
              <Route index element={<StaffHome />} />
              <Route path="avaliable" element={<StaffRoomType />} />
              <Route path="service-booking" element={<StaffRoomType />} />
              <Route path="booking" element={<StaffRoomType />} />
              <Route path="roomtype" element={<StaffRoomType />} />
              <Route path="promotion" element={<StaffPromotion />} />
              <Route path="service" element={<StaffService />} />
              <Route path="product" element={<StaffProduct />} />
              <Route path="avaliable-room" element={<StaffAvaliableRoom />} />
              <Route path="assign-maid" element={<StaffAssignMaid />} />
            </Route>
            <Route path="maid" element={<StaffLayout />}>
              <Route index element={<StaffHome />} />
              <Route path="checkingService" element={<MaidChecking />} />
              <Route path="historyService" element={<MaidHistoryService />} />
              <Route path="productCharge" element={<MaidProductCharge />} />
            </Route>
            <Route path="manager" element={<StaffLayout />}>
              <Route index element={<StaffHome />} />
              <Route path="staffManage" element={<ManagerStaffManage/>} />
            </Route>
            <Route path="reception" element={<StaffLayout />}>
              <Route index element={<StaffHome />} />
              <Route path="reservation" element={<ReceptReserve />} />
              <Route path="payment-booking" element={<ReceptPayment />} />
              <Route path="payment" element={<Payment />} />
            </Route>
          </Routes>
        </main >
      </ConfigProvider>
    </Router>
  );
};

export default App;
