import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import profileImage from "../../assets/images/dash-profile.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[88px] flex justify-between items-center rounded-2xl py-[16px] px-[32px] bg-[#E9F4F3] shadow-sm">
      <div className="text-start space-y-0.5">
        <p className="text-[24px] font-semibold text-[#1F8D84]">
          {"Welcome,RJ"}
        </p>
        <p className="text-[#181414]">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "#1F8D84" }} count={1}>
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={`text-[#1F8D84] hover:text-[#1f8d2e] bg-[#BADCD9] w-[48px] h-[48px] rounded-full p-2 shadow-sm transition-all`}
            />
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <img src={profileImage} alt="" className="rounded-full h-[48px] w-[48px]"  />
          </div>
          <div className="space-y-0.5 text-right">
            <h5 className="text-[16px] font-medium">{"RJ"}</h5>
            <p className="text-xs ">{"Admin"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
