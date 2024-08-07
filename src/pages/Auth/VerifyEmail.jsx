import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-[451px] bg-[#BADCD9] py-[64px] px-[44px] rounded-2xl space-y-[24px]">
      <div className="flex justify-center items-center gap-1">
        <button onClick={() => navigate("/auth/forgot-password")}>
          <RxArrowLeft size={22} />
        </button>
        <h5 className="text-2xl font-medium">Verify OTP</h5>
      </div>
      <p className="text-center text-[#464343]">
        Please enter the otp we have sent you in your email.
      </p>
      <div className="pb-[10px]">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={{
            height: "57px",
            width: "44px",
            margin: "auto",
            background: "#E9F4F3",
            border: "1px solid #1F8D84",
            marginRight: "10px",
            outline: "none",
            borderRadius: "8px",
            color: "black",
          }}
          renderSeparator={<span> </span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div>
        <Button
          onClick={() => navigate("/auth/reset-password")}
          style={{
            backgroundColor: "#1F8D84",
            size: "18px",
            height: "56px",
            color: "#ffff",
          }}
          htmlType="submit"
          className="w-full h-[56px] px-2 font-medium rounded-lg"
        >
          Verify Email
        </Button>
      </div>
    </div>
  );
};
export default VerifyEmail;
