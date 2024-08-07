import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";

const ResetPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="w-[451px] bg-[#BADCD9] py-[64px] px-[44px] rounded-2xl space-y-6">
      <div className="flex justify-center items-center gap-1">
        <button onClick={() => navigate("/auth/verify-email")}>
          <RxArrowLeft size={22} />
        </button>
        <h5 className="text-2xl font-medium">Reset Password</h5>
      </div>
      <p className="text-center text-[#464343]">
        Your password must be 8-10 character long.
      </p>
      <Form
        name="basic"
        layout="vertical"
        className="w-full space-y-[24px]"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          className="text-start"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          name="password"
        >
          <Input.Password
            style={{
              border: "1px solid #1F8D84",
              height: "56px",
              background: "#E9F4F3",
              outline: "none",
              color: "#646262",
              padding: "16px 12px",
              marginBottom: "10px",
            }}
            placeholder="Set your password"
          />
        </Form.Item>
        <Form.Item
          className="text-start"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          name="rePassword"
        >
          <Input.Password
            style={{
              border: "1px solid #1F8D84",
              height: "56px",
              background: "#E9F4F3",
              outline: "none",
              color: "#646262",
              padding: "16px 12px",
              marginBottom: "10px",
            }}
            placeholder="Re-enter your password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{
              backgroundColor: "#1F8D84",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            htmlType="submit"
            className="w-full h-[56px] px-2 font-medium rounded-lg "
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
