import { BiSolidDashboard } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoGiftOutline } from "react-icons/io5";
import { LuCopyPlus, LuUsers2 } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { FaRegChessQueen } from "react-icons/fa6";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { RiDashboardHorizontalFill } from "react-icons/ri";

export const sidebarItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
  },
  {
    name: "Earnings",
    path: "/earnings",
    icon: GrMoney,
  },
  {
    name: "Users",
    path: "/dashboard/users",
    icon: LuUsers2,
  },
  {
    name: "Subscription",
    path: "/dashboard/subscription",
    icon: FaRegChessQueen,
  },
  {
    name: "Categories",
    path: "/dashboard/categories",
    icon: LuCopyPlus,
  },
  {
    name: "Deals",
    path: "/dashboard/deals",
    icon: MdOutlineContentPasteGo,
  },
  {
    name: "Trending Place",
    path: "/dashboard/trending-place",
    icon: SlLocationPin,
  },
  {
    name: "Redeem",
    path: "/dashboard/redeem",
    icon: IoGiftOutline,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: CiSettings,
  },
];
