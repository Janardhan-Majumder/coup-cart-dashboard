import React from "react";

const DashboardHome = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-x-[22px]">
        <div className="col-span-3 bg-[#EEF8EF] p-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Earnings"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">
            $ {`254.99 `}
          </h3>
        </div>
        <div className="col-span-3 bg-[#EEF8EF] p-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Users"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">6500</h3>
        </div>
        <div className="col-span-3 bg-[#EEF8EF] p-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Subscriber"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">740</h3>
        </div>
        <div className="col-span-3 bg-[#EEF8EF] p-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Redeem"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">7400</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
