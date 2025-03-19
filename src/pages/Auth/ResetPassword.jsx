import { Button, Form, Input } from "antd";
import { RxArrowLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/features/auth/authApi";
import { ErrorSwal, SuccessSwal } from "../../utils/allSwalFire";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [resetPass, { isLoading }] = useResetPasswordMutation();

  const onFinish = async (values) => {
    // const token = localStorage.getItem("token");

    const password = values.rePassword;

    try {
      const response = await resetPass({
        // id: email,
        // token,
        password: password,
      }).unwrap();

      SuccessSwal({
        title: "Success",
        text: response.message || "Password reset successfully!",
      });

      navigate("/auth");
    } catch (error) {
      ErrorSwal({
        title: "",
        text: error.data.message || error.data || "Something went wrong!",
      });
    }
  };

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
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
            }}
            placeholder="Set your password"
          />
        </Form.Item>
        <Form.Item
          className="text-start mt-2"
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
            loading={isLoading}
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
