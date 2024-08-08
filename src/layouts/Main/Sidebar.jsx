import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/dash-logo.png";
import { sidebarItems } from "../../consonents/router.constents";
import { createElement } from "react";
import { IoIosLogOut } from "react-icons/io";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {};

  return (
    <div className="fixed top-0 left-0 w-[326px] min-h-screen flex flex-col justify-between bg-primary py-[50px]">
      <div className="space-y[24px">
        <div className="px-[38px]">
          <img className="w-[250px] mx-auto" src={logo} alt="" />
        </div>
        <ul className="mt-[24px] max-h-[650px] overflow-y-auto space-y-2 xl:space-y-3">
          {sidebarItems.map(({ name, icon, path }, indx) => (
            <li key={indx}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-[#1F8D84]" +
                      " w-full px-10 py-4 flex items-center justify-start gap-3 text-lg transition-all"
                    : "text-white hover:text-[#1F8D84] text-[20px] hover:bg-white" +
                      " w-full px-10 py-4 flex items-center justify-start gap-6 text-lg transition-all"
                }
              >
                <div>{createElement(icon, { size: "20" })}</div>
                <span> {name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-[24px]">
        <button
          onClick={handleLogOut}
          className="bg-white w-full px-10 py-4 flex items-center justify-start gap-6 text-lg outline-none font-medium text-[#EE1D23]"
        >
          <IoIosLogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
