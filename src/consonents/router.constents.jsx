import { BiSolidDashboard } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoGiftOutline } from "react-icons/io5";
import { LuCopyPlus, LuUsers2 } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { FaRegChessQueen } from "react-icons/fa6";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Earnings from "../pages/Main/Earnings/Earnings";
import Users from "../pages/Main/Users/Users";
import Subscriptions from "../pages/Main/Subscriptions/Subscriptions";
import Categories from "../pages/Main/Categories/Categories";
import Deals from "../pages/Main/Deals/Deals";
import TrendingPlace from "../pages/Main/TrendingPlace/TrendingPlace";
import Redeem from "../pages/Main/Redeem/Redeem";
import Setting from "../pages/Setting/Setting";
import EditSubscriptions from "../pages/Main/Subscriptions/EditSubscription";
import AddSubscription from "../pages/Main/Subscriptions/AddSubscription";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Earnings",
    path: "/earnings",
    icon: GrMoney,
    element: <Earnings />,
  },
  {
    name: "Users",
    path: "/users",
    icon: LuUsers2,
    element: <Users />,
  },
  {
    name: "Subscription",
    path: "/subscriptions",
    icon: FaRegChessQueen,
    element: <Subscriptions />,
  },
  {
    path: "/subscriptions/edit/:id",
    element: <EditSubscriptions />,
  },
  {
    path: "/subscriptions/add-new",
    element: <AddSubscription />,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: LuCopyPlus,
    element: <Categories />,
  },
  {
    name: "Deals",
    path: "/deals",
    icon: MdOutlineContentPasteGo,
    element: <Deals />,
  },
  {
    name: "Trending Place",
    path: "/trending-place",
    icon: SlLocationPin,
    element: <TrendingPlace />,
  },
  {
    name: "Redeem",
    path: "/redeem",
    icon: IoGiftOutline,
    element: <Redeem />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: CiSettings,
    element: <Setting />,
  },
];
