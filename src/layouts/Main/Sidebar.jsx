import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/dash-logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { HiLogout } from "react-icons/hi";
import { IoChatbubblesSharp, IoGiftOutline } from "react-icons/io5";
import { RiCurrencyLine } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { LuCopyPlus, LuUsers2 } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { FaRegChessQueen } from "react-icons/fa6";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { sidebarItems } from "../../consonents/router.constents";
import { createElement } from "react";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {};

  return (
    <div className="fixed top-0 left-0 w-[326px] min-h-screen flex flex-col justify-between bg-primary py-[60px]">
      <div className="space-y-[24px]">
        <div className="px-[38px]">
          <img className="w-[250px] mx-auto" src={logo} alt="" />
        </div>
        <div className="mt-[24px]">
          <ul>
            {sidebarItems.map(({ name, icon, path }, indx) => (
              <li key={indx}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white text-[#1F8D84]"
                      : "text-white hover:text-[#1F8D84] text-[20px] hover:bg-white" +
                        " w-full px-10 py-4 flex items-center justify-start gap-3 text-lg transition-all"
                  }
                >
                  
                    <div>{createElement(icon, { size: "20" })}</div>
                    <span> {name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-[32px]">
        <div
          onClick={handleLogOut}
          className="flex items-center ml-[18px] cursor-pointer gap-2 text-[red] font-medium"
        >
          <HiLogout width={25} height={25} />
          <span className="text-[20px] ">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
