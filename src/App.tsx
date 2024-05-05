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
            </Route>
          </Routes>
        </main >
      </ConfigProvider>
    </Router>
  );
};

export default App;
