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
import EditSubscriptions from "../pages/Main/Subscriptions/EditSubscription";
import AddSubscription from "../pages/Main/Subscriptions/AddSubscription";
import AddCategory from "../pages/Main/Categories/AddCategory";
import EditCategory from "../pages/Main/Categories/EditCategory";
import AddDeal from "../pages/Main/Deals/AddDeal";
import EditDeal from "../pages/Main/Deals/EditDeals";
import Settings from "../pages/Settings/Settings";
import MyProfile from "../pages/Profile/MyProfile";
import EditMyProfile from "../pages/Profile/EditMyProfile";

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
    path: "/categories/add-new",
    element: <AddCategory />,
  },
  {
    path: "/categories/edit/:id",
    element: <EditCategory />,
  },
  {
    name: "Deals",
    path: "/deals",
    icon: MdOutlineContentPasteGo,
    element: <Deals />,
  },
  {
    path: "/deals/add-new",
    element: <AddDeal />,
  },
  {
    path: "/deals/edit/:id",
    element: <EditDeal />,
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
    element: <Settings />,
  },
  {
    path: "/settings/personal-information",
    element: <MyProfile />,
  },
  {
    path: "/settings/personal-information/edit",
    element: <EditMyProfile />,
  },
];
