import React from "react";
import DashboardChart from "./DashboardCahrt";
import DashboardHomeTable from "./DashboardHomeTable";
const items = [
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2024")}>
        2024
      </p>
    ),
    key: 1,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2023")}>
        2023
      </p>
    ),
    key: 2,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2022")}>
        2022
      </p>
    ),
    key: 3,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2021")}>
        2021
      </p>
    ),
    key: 4,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2020")}>
        2020
      </p>
    ),
    key: 5,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2019")}>
        2019
      </p>
    ),
    key: 6,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2018")}>
        2018
      </p>
    ),
    key: 7,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2017")}>
        2017
      </p>
    ),
    key: 8,
  },
];
const DashboardHome = () => {
  return (
    <div className="space-y-[24px]">
      <div className="grid grid-cols-12 gap-x-[22px]">
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Earnings"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">
            $ {`254.99 `}
          </h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Users"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">6500</h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Subscriber"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">740</h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Redeem"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">7400</h3>
        </div>
      </div>
      <DashboardChart />
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
