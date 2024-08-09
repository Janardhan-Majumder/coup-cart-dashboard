import React, { useState } from "react";
import { Button, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "./DashboardModal";
const DashboardHomeTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
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
    <div className="bg-playground rounded-lg py-[16px]">
      <div>
        <h3 className="text-xl font-medium text-[#464343] px-6 pb-5">
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
      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className="h-[560px] flex flex-col justify-between">
          <div className="space-y-[36px] text-sm text-[#181414] py-2">
            <h6 className="font-medium text-center">Transaction Details</h6>
            <div className="flex justify-between">
              <p>Transaction ID : </p>
              <p className="font-medium">{modalData.transIs}</p>
            </div>
            <div className="flex justify-between">
              <p>Date : </p>
              <p className="font-medium">{modalData.date}</p>
            </div>
            <div className="flex justify-between">
              <p>User name :</p>
              <p className="font-medium">{modalData.name}</p>
            </div>
            <div className="flex justify-between">
              <p>A/C number :</p>
              <p className="font-medium">{"****  ****  ****  *545"}</p>
            </div>
            <div className="flex justify-between">
              <p>A/C holder name :</p>
              <p className="font-medium">{"Henry"}</p>
            </div>
            <div className="flex justify-between">
              <p>Transaction amount :</p>
              <p className="font-medium">{modalData.amount}</p>
            </div>
          </div>
          <div className="flex gap-5 pb-[40px]">
            <Button
              style={{ height: "44px" }}
              className="w-full rounded-xl font-medium"
            >
              Download
            </Button>
            <Button
              style={{
                height: "44px",
                backgroundColor: "#1F8D84",
                color: "white",
              }}
              className="w-full rounded-xl font-medium"
            >
              Print
            </Button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default DashboardHomeTable;
