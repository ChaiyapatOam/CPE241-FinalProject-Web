import { FileOutlined, HistoryOutlined, HomeOutlined } from '@ant-design/icons'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { FaRegFileLines } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { IoBookmarksOutline, IoBookOutline } from 'react-icons/io5'
import { LiaGlassCheersSolid } from 'react-icons/lia'
import {
  MdOutlineBedroomChild,
  MdOutlineBookmarkAdd,
  MdOutlineCheckroom,
  MdOutlineCleaningServices,
} from 'react-icons/md'
import { RiCoupon2Line, RiMoneyDollarCircleLine } from 'react-icons/ri'
import { VscGraphLine } from 'react-icons/vsc'

export const pageTitleList = [
  {
    path: '/staff',
    title: 'Home',
    icon: <HomeOutlined style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/avaliable',
    title: 'Avaliable',
    icon: <FileOutlined style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/roomtype',
    title: 'Room Type',
    icon: <MdOutlineBedroomChild style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/service-booking',
    title: 'Service Booking',
    icon: <IoBookOutline style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/booking',
    title: 'Booking',
    icon: <IoBookmarksOutline style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/promotion',
    title: 'Promotion',
    icon: <RiCoupon2Line style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/service',
    title: 'Service',
    icon: <MdOutlineCleaningServices style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/product',
    title: 'Product',
    icon: <LiaGlassCheersSolid style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/avaliable-room',
    title: 'Avaliable Room',
    icon: <MdOutlineCheckroom style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/assign-maid',
    title: 'Assign Maid',
    icon: <MdOutlineCleaningServices style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/all-service',
    title: 'All Service',
    icon: <FaRegFileLines style={{ fontSize: '24px' }} />,
  },
  {
    path: '/staff/history-booking',
    title: 'History Booking',
    icon: <HistoryOutlined style={{ fontSize: '24px' }} />,
  },
  {
    path: '/maid',
    title: 'Home',
    icon: <HomeOutlined style={{ fontSize: '24px' }} />,
  },
  {
    path: '/maid/checking-service',
    title: 'Checking Service',
    icon: <FaRegCalendarCheck style={{ fontSize: '24px' }} />,
  },
  {
    path: '/maid/historyService',
    title: 'History Service',
    icon: <HistoryOutlined style={{ fontSize: '24px' }} />,
  },
  {
    path: '/maid/productCharge',
    title: 'Product Charge',
    icon: <RiMoneyDollarCircleLine style={{ fontSize: '24px' }} />,
  },
  {
    path: '/manager/dashboard',
    title: 'Dashboard',
    icon: <VscGraphLine style={{ fontSize: '24px' }} />,
  },
  {
    path: '/manager/staff-manage',
    title: 'Staff Manage',
    icon: <FiUsers style={{ fontSize: '24px' }} />,
  },
  {
    path: '/reception/reservation',
    title: 'Reservation',
    icon: <MdOutlineBookmarkAdd style={{ fontSize: '24px' }} />,
  },
  {
    path: '/reception/payment',
    title: 'Payment',
    icon: <RiMoneyDollarCircleLine style={{ fontSize: '24px' }} />,
  },
  {
    path: '/reception/payment-booking',
    title: 'Payment Booking',
    icon: <RiMoneyDollarCircleLine style={{ fontSize: '24px' }} />,
  },
]
