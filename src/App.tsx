import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ConfigProvider } from "antd";
import { theme } from "./utils/theme";
import StaffLayout from "./pages/staff";
import StaffHome from "./pages/staff/home";
import StaffRoomType from "./pages/staff/payment";
import StaffPromotion from "./pages/staff/promotion";

const App = () => {
  return (
    <Router>
      <ConfigProvider theme={theme}>
        <main className="font-IBM min-h-dvh">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="staff" element={<StaffLayout />}>
              <Route index element={<StaffHome />} />
              <Route path="avaliable" element={<StaffRoomType />} />
              <Route path="service-booking" element={<StaffRoomType />} />
              <Route path="booking" element={<StaffRoomType />} />
              <Route path="roomtype" element={<StaffRoomType />} />
              <Route path="promotion" element={<StaffPromotion />} />
              <Route path="service" element={<StaffRoomType />} />
              <Route path="product" element={<StaffRoomType />} />
            </Route>
          </Routes>
        </main>
      </ConfigProvider>
    </Router>
  );
};

export default App;
