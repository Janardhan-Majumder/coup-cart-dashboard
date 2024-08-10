import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";

const MyProfile = () => {
  const [code, setCode] = useState();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const profileData = {
    name: "Enrique",
    email: "enrique@gmail.com",
    phone: "+880 150597212",
    profile: dashProfile,
  };
  console.log(code);

  return (
    <div className="space-y-[24px]">
      <div className="flex justify-between">
        <PageHeading title={"Personal information"} />
        <Button
          onClick={(e) => navigate(`/settings/personal-information/edit`)}
          style={{
            backgroundColor: "#1F8D84",
            color: "#fff",
          }}
          className="h-[56px] w-[206px]  placeholder:text-[#999999] text-[18px] font-medium"
          type="primary"
        >
          Edit Profile <FiEdit />
        </Button>
      </div>
      <Form
        name="basic"
        layout="vertical"
        className="w-full grid grid-cols-12 gap-x-10"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          name: profileData.name,
          email: profileData.email,
        }}
      >
        <div className="col-span-4 min-h-[365px] flex flex-col items-center justify-center bg-[#E9F4F3] p-8 rounded-lg border border-[#1F8D84] space-y-4 shadow-inner">
          <div className="my-3 ">
            <img
              src={dashProfile}
              alt=""
              className="h-[144px] w-[144px] rounded-full"
            />
          </div>
          <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
          <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
        </div>
        <div className="col-span-8 space-y-[24px]">
          <Form.Item
            className="text-lg text-[#1F8D84] font-medium"
            label="Name"
            name="name"
          >
            <Input
              readOnly
              style={{
                border: "1px solid #1F8D84",
              }}
              className="h-[56px] rounded-lg bg-[#E9F4F3] mt-3"
            />
          </Form.Item>
          <Form.Item
            className="text-lg text-[#1F8D84] font-medium"
            label="Email"
            name="email"
          >
            <Input
              readOnly
              style={{
                border: "1px solid #1F8D84",
              }}
              className="h-[56px] rounded-lg bg-[#E9F4F3] mt-3"
            />
          </Form.Item>
          <Form.Item
            className="text-lg text-[#222222] font-medium"
            label="Phone Number"
            name="phone"
          >
            <PhoneCountryInput disabled={true} />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default MyProfile;
