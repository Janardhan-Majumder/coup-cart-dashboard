import { Button, DatePicker, Input, Table } from "antd";
import dayjs from "dayjs"; // Import dayjs
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import DashboardModal from "../../../Components/DashboardModal";
import { useGetAllUsersQuery } from "../../../redux/features/dashboard/dashboardApi";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  //  call api
  const { data: userData } = useGetAllUsersQuery();
  const data = userData?.data?.results;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text.slice(0, 7)}</a>,
    },
    {
      title: "User Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
    },
    {
      title: "Join Date",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (createdAt) => dayjs(createdAt).format("DD MMM YYYY"),
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

  return (
    <div className="bg-[#E9F4F3] rounded-lg py-[16px]">
      <div className="">
        <div className="px-6 pb-5 flex justify-between items-center">
          <h3 className="text-xl font-medium text-[#464343]">{"User List"}</h3>
          <div className="flex justify-end gap-x-4">
            <DatePicker
              placeholder="Date"
              style={{ width: "150px" }}
              className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] px-3.5 text-sm"
              onChange={onChange}
            />
            <Input
              className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
              placeholder="User Name"
            />
            <Button
              className="bg-[#1F8D84] text-white border-none"
              type="primary"
              shape="circle"
              icon={<IoSearch />}
            />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
            showQuickJumper: true,
          }}
        />
      </div>
      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className="h-auto flex flex-col justify-between">
          <div className="space-y-[18px] text-sm text-[#181414] pb-2 divide-y">
            <h6 className="font-semibold text-xl text-center pt-[18px]">
              User Details
            </h6>
            <div className="flex justify-between pt-[18px]">
              <p>User Name</p>
              <p className="font-medium">{modalData.fullName}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Email</p>
              <p className="font-medium">{modalData.email}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Phone Number</p>
              <p className="font-medium">{modalData.phoneNumber}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Address</p>
              <p className="font-medium">{"Dhaka, Bangladesh"}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Joining Date</p>
              <p className="font-medium">
                {dayjs(modalData.createdAt).format("DD MMM YYYY")}{" "}
                {/* Format the date */}
              </p>
            </div>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Users;
