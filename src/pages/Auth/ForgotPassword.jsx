import { Button, Form, Input } from "antd";
import { RxArrowLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../redux/features/auth/authApi";
import { ErrorSwal, SuccessSwal } from "../../utils/allSwalFire";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const onFinish = async (values) => {
    // const { email } = values;

    try {
      const response = await forgotPassword(values).unwrap();
      console.log(response);

      SuccessSwal({
        title: "Success",
        text: response.data.message || response.message || "Success",
      });

      navigate(`/auth/verify-email`);
    } catch (error) {
      ErrorSwal({
        title: "",
        text: error.data.message || error.data || "Something went wrong!",
      });
    }

    // navigate(`/auth/verify-email`);
  };
  // const onFinish = (values) => {
  //   // console.log("Success:", values);
  //   navigate("/auth/verify-email");
  // };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" w-[451px] bg-[#BADCD9] py-[64px] px-[44px] rounded-2xl space-y-[24px]">
      <div className="flex justify-center items-center gap-1">
        <button onClick={() => navigate("/auth/sign-in")}>
          <RxArrowLeft size={22} />
        </button>
        <h5 className="text-2xl font-medium">Forgot Password</h5>
      </div>
      <p className="text-center text-[#464343]">
        Please enter your email address to reset your password.
      </p>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-full space-y-[24px]"
      >
        <Form.Item
          className={"text-start"}
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your assword!",
            },
          ]}
        >
          <Input
            // onChange={handleChange}
            placeholder="Email"
            name="email"
            style={{
              border: "1px solid #1F8D84",
              height: "56px",
              background: "#E9F4F3",
              outline: "none",
              color: "#646262",
              padding: "16px 12px",
              placeholder: "black",
            }}
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
            className="w-full h-[56px] px-2 font-medium rounded-lg mt-[10px]"
          >
            Send OTP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
