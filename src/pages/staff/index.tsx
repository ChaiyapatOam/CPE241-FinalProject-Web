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
  ];

  return (
    <>
      <h1 className="text-2xl text-black font-bold mt-6">
        <span className="px-4 py-1 bg-secondary rounded-full">
          {pageTitle.filter((page) => page.path === location.pathname)[0].title}
        </span>
      </h1>
      <Outlet />
    </>
  );
};

export default StaffLayout;
