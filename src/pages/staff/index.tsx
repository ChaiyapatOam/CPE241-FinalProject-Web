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
      path: "/staff/all-service",
      title: "All Service",
    },
    {
      path: "/staff/history-booking",
      title: "History Booking",
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
      path: "/manager/staff-manage",
      title: "Staff Manage",
    },
    {
      path: "/reception/reservation",
      title: "Reservation",
    },
    {
      path: "/reception/payment-booking",
      title: "Payment",
    },
    {
      path: "/reception/payment",
      title: "Payment",
    },
    {
      path: "/manager/dashboard",
      title: "Dashboard",
    },
  ];

  return (
    < >
    <div className="flex flex-row pt-10 mb-8">
      <div className="basis-4/12 text-right">
      <h1 className="text-3xl text-dark-grey font-bold p-5">
        <span className="pl-10 pr-10 py-3 bg-secondary rounded-full w-full">
          {pageTitle.filter((page) => page.path === location.pathname)[0].title}
        </span>
      </h1>
      </div>
    </div>
      
      <Outlet />
    </>
  );
};

export default StaffLayout;
