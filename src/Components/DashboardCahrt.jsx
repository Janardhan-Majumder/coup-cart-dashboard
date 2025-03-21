import { Button, Dropdown } from "antd";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { useGetEarningsQuery } from "../redux/features/dashboard/dashboardApi";

const DashboardChart = () => {
  const [cartYear, setCartYear] = useState("Select Year");
  const handleMenuClick = (year) => {
    setCartYear(year);
  };
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
  // const chart = [
  //   {
  //     name: "Jan",
  //     earn: 500,
  //   },
  //   {
  //     name: "Feb",
  //     earn: 700,
  //   },
  //   {
  //     name: "Mar",
  //     earn: 40,
  //   },
  //   {
  //     name: "Apr",
  //     earn: 900,
  //   },
  //   {
  //     name: "May",
  //     earn: 672,
  //   },
  //   {
  //     name: "Jun",
  //     earn: 300,
  //   },
  //   {
  //     name: "Jul",
  //     earn: 800,
  //   },
  //   {
  //     name: "Aug",
  //     earn: 400,
  //   },
  //   {
  //     name: "Sep",
  //     earn: 250,
  //   },
  //   {
  //     name: "Oct",
  //     earn: 710,
  //   },
  //   {
  //     name: "Nov",
  //     earn: 310,
  //   },
  //   {
  //     name: "Dec",
  //     earn: 840,
  //   },
  // ];

  const { data } = useGetEarningsQuery();
  const chart = data?.data?.monthlyEarnings;
  console.log(data?.data?.monthlyEarnings);

  return (
    <div className="bg-playground rounded-lg px-[24px] py-[15px]">
      <div className="flex justify-between items-center">
        <h4 className="text-[20px] font-medium">Earnings</h4>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Button type="text" className="space-x-2 px-2">
            <span className="text-lg">{cartYear}</span>
            <FaChevronDown />
          </Button>
        </Dropdown>
      </div>
      <BarChart
        width={1450}
        height={280}
        data={chart}
        margin={{
          top: 40,
          left: -25,
        }}
      >
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="5 5"
          strokeOpacity={1}
          strokeWidth={1}
          vertical={false}
        />
        <Tooltip />
        <XAxis
          dataKey="month"
          tick={{ stroke: "#464343", strokeWidth: 0.5 }}
          style={{ fontWeight: "350", color: "#464343" }}
        />
        <YAxis
          tick={{ stroke: "#464343", strokeWidth: 0.5 }}
          label={{ tyle: { textAnchor: "middle" } }}
          tickFormatter={(_value, index) => `$${index}k`}
          tickCount={12}
          style={{ fontWeight: "350", color: "#464343" }}
        />
        <Bar
          dataKey="totalEarnings"
          fill="#1F8D84"
          barSize={26}
          // activeBar={<Rectangle fill="pink" stroke="green" />}
        />
      </BarChart>
    </div>
  );
};

export default DashboardChart;
