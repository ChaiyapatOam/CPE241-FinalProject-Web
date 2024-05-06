import { Outlet, useLocation } from "react-router-dom";

const StaffLayout = () => {
  const location = useLocation();
  const pageTitle = [
    {
      path: "/staff",
      title: "Home",
    },
    {
      path: "/staff/roomtype",
      title: "Room Type",
    },
    {
      path: "/staff/avaliable",
      title: "Avaliable",
    },
    {
      path: "/staff/service-booking",
      title: "Service Booking",
    },
    {
      path: "/staff/booking",
      title: "Booking",
    },
    {
      path: "/staff/promotion",
      title: "Promotion",
    },
    {
      path: "/staff/service",
      title: "Service",
    },
    {
      path: "/staff/product",
      title: "Product",
    },
    {
      path: "/staff/avaliable-room",
      title: "avaliable-room",
    },
    {
      path: "/staff/assign-maid",
      title: "Assign Maid",
    },
    {
      path: "/maid",
      title: "Home",
    },
    {
      path: "/maid/checkingService",
      title: "Checking Service",
    },
    {
      path: "/maid/historyService",
      title: "History Service",
    },
    {
      path: "/maid/productCharge",
      title: "Product Charge",
    },
    {
      path: "/manager/staffManage",
      title: "Staff Manage",
    },
    {
      path: "/reception/reservation",
      title: "Reservation",
    },
  ];

  return (
    < >
      <h1 className="text-2xl text-dark-grey font-bold p-5">
        <span className="px-4 py-1 bg-secondary rounded-full w-full">
          {pageTitle.filter((page) => page.path === location.pathname)[0].title}
        </span>
      </h1>
      <Outlet />
    </>
  );
};

export default StaffLayout;
