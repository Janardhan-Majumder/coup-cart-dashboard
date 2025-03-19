import { Button, Input } from "antd";
import Form from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setLogin } from "../../redux/slices/authSlice";
import { ErrorSwal, SuccessSwal } from "../../utils/allSwalFire";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nizamLogin, { isLoading }] = useLoginMutation();

  const onFinish = async (values) => {
    try {
      const response = await nizamLogin(values).unwrap();
      console.log(response);

      localStorage.setItem("token", response?.data?.token);

      dispatch(
        setLogin({
          user: { ...response?.data?.user, _id: response?.data?.user?.id },
          token: response?.data?.token,
        })
      );

      SuccessSwal({
        title: "Login Successful!",
        text: "You have successfully logged in!",
      });

      navigate(location.state ? location.state : "/");
    } catch (error) {
      ErrorSwal({
        title: "Login Failed!",
        text: error.data?.message || error?.message || "Something went wrong!",
      });

      console.log(error);
    }
  };

  return (
    <div className="bg-[#BADCD9] w-[451px] py-[64px] px-[44px] rounded-[16px]">
      <div className="pb-[30px]">
        <h1 className="text-[24px] text-center font-medium ">Sign In</h1>
      </div>
      <Form
        name="normal_login"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className="space-y-[24px]"
      >
        <Form.Item
          className="text-start"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            // onChange={handleChange}
            placeholder="User name"
            style={{
              border: "1px solid #1F8D84",
              height: "56px",
              background: "#E9F4F3",
              color: "#646262",
              padding: "16px 12px",
              outline: "none",
            }}
          />
        </Form.Item>
        <Form.Item
          className="text-start mt-2"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            // onChange={handleChange}
            placeholder="Password"
            name="password"
            style={{
              border: "1px solid #1F8D84",
              height: "56px",
              background: "#E9F4F3",
              outline: "none",
              color: "#646262",
              padding: "16px 12px",
            }}
          />
        </Form.Item>
        <div className="flex justify-between items-center">
          {/* <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="text-base font-medium text-[#1F8D84]">
              Remember me
            </Checkbox>
          </Form.Item> */}
          <div></div>
          <Button
            onClick={() => navigate("/auth/forgot-password")}
            type="link"
            className="text-base font-medium text-[#1F8D84] pb-5"
          >
            Forget password?
          </Button>
        </div>
        <Form.Item>
          <Button
            style={{
              backgroundColor: "#1F8D84",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            loading={isLoading}
            htmlType="submit"
            className="w-full h-[56px] px-2 font-medium rounded-lg "
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
