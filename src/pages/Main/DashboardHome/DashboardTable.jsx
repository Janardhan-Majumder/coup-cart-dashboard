import React, { useState } from "react";
import { Button, Table, Tag } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
const DashboardTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setUserDetails(data);
  };
  const columns = [
    {
      title: "#Tr.ID",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Subscription",
      dataIndex: "subscription",
      key: "subscription",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button
          onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-[#FF8400]"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      transIs: "12345678",
      name: "Henry",
      subscription: "Standard",
      amount: "$9.99",
      date: "16 Apr 2024",
      _id: index,
    });
    // const element = array[index];
  }
  return (
    <div className="bg-playground rounded-lg py-[15px]">
      <div>
        <h3 className="text-xl font-medium text-[#464343] px-6 py-4">
          {"Recent Transactions"}
        </h3>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
          }}
        />
      </div>
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        userDetails={userDetails}
      />
    </div>
  );
};

export default DashboardTable;
