import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { PiCameraPlus } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LiaArrowLeftSolid } from "react-icons/lia";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";

const EditMyProfile = () => {
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
    <div className="space-y-[34px]">
      <PageHeading
        title={"Edit Personal information"}
        backPath={"/settings/personal-information"}
      />
      <Form
        name="basic"
        layout="vertical"
        className="w-full grid grid-cols-12 gap-x-5"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          name: profileData.name,
          email: profileData.email,
        }}
      >
        <div className="col-span-4 h-[365px] flex flex-col items-center justify-center bg-[#E9F4F3] p-8 rounded-lg border border-[#1F8D84] space-y-4 shadow-inner">
          <div className="my-3 relative">
            <div className="h-full w-full absolute inset-0 bg-[#222222bb] rounded-full flex justify-center items-center text-white cursor-pointer">
              <PiCameraPlus size={34} />
            </div>
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
            <PhoneCountryInput />
          </Form.Item>
          <div className="flex justify-end">
            <Button
              style={{
                backgroundColor: "#1F8D84",
                color: "#fff",
              }}
              htmlType="submit"
              className="h-[56px] w-[206px]  placeholder:text-[#999999] text-[18px] font-medium"
              type="primary"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditMyProfile;
