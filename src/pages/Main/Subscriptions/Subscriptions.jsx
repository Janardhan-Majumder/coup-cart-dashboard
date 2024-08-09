import { Button } from "antd";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import SubscriptionCard from "../../../Components/SubscriptionCard";
import { useNavigate } from "react-router-dom";
import DashboardModal from "../../../Components/DashboardModal";

const Subscriptions = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  return (
    <div className="space-y-[24px]">
      <div className="flex justify-end">
        <Button
          onClick={() => navigate("add-new")}
          type="primary"
          style={{ height: "56px" }}
          className="text-lg bg-primary rounded-lg"
        >
          <FiPlus /> Add New Subscription
        </Button>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-10">
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
        <SubscriptionCard
          data={{ title: "Standard" }}
          setModalData={showModal}
        />
        <SubscriptionCard
          data={{ title: "Premium" }}
          setModalData={showModal}
        />
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
        <SubscriptionCard
          data={{ title: "Standard" }}
          setModalData={showModal}
        />
        <SubscriptionCard
          data={{ title: "Premium" }}
          setModalData={showModal}
        />
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
      </div>
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        closeIcon={false}
      >
        <div className="px-6 space-y-5">
          <h1 className="text-[24px] font-semibold">Delete Subsription</h1>
          <p>Are you sure you want to delete the subscription package ?</p>
          <div className="flex gap-6 justify-end py-3">
            <Button
              // onClick={() => navigate(`edit/${"564564656"}`)}
              className="bg-gray-100 hover:bg-gray-200 text-[#1F8D84] rounded-full w-[70px]"
              type="default"
              size="large"
            >
              No
            </Button>
            <Button
              // onClick={() => setIsModalOpen(true)}
              style={{ background: "#1F8D84", color: "white" }}
              className="rounded-full w-[70px]"
              type="default"
              size="large"
            >
              Yes
            </Button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Subscriptions;
