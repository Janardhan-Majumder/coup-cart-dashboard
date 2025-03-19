import { Button, Form } from "antd";
import { useState } from "react";
import { RxArrowLeft } from "react-icons/rx";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useVerifyEmailMutation } from "../../redux/features/auth/authApi";
import { ErrorSwal, SuccessSwal } from "../../utils/allSwalFire";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const onFinish = async () => {
    if (!/^\d{6}$/.test(code)) {
      return Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Please enter a valid 6-digit OTP.",
      });
    }
    try {
      const response = await verifyEmail({ code }).unwrap();
      SuccessSwal({ title: "Success", text: response.message || "Success" });
      navigate(`/auth/reset-password`);
    } catch (error) {
      ErrorSwal({
        title: "",
        text: error.data.message || error.data || "Something went wrong!",
      });
    }
  };

  return (
    <div className="w-[451px] bg-[#BADCD9] py-[64px] px-[44px] rounded-2xl space-y-[24px]">
      <div className="flex justify-center items-center gap-1">
        <button onClick={() => navigate("/auth/forgot-password")}>
          <RxArrowLeft size={22} />
        </button>
        <h5 className="text-2xl font-medium">Verify OTP</h5>
      </div>
      <p className="text-center text-[#464343]">
        Please enter the OTP we have sent to your email.
      </p>

      {/* Form */}
      <Form
        name="normal_login"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {/* OTP Input */}
        <div className="py-3 text-2xl font-semibold flex justify-center">
          <OTPInput
            value={code}
            onChange={setCode}
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
            renderInput={(props) => <input {...props} aria-label="OTP Input" />}
          />
        </div>

        {/* Submit (Verify) Button */}
        <div className="w-full flex justify-center pt-5">
          <Button
            style={{
              backgroundColor: "#1F8D84",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            loading={isLoading}
            htmlType="submit"
            className="w-full h-[56px] px-2 font-medium rounded-lg"
          >
            Verify Email
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default VerifyEmail;
