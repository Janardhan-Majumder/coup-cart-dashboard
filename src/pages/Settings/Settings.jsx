import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [form] = Form.useForm();
  const handleNavigate = (value) => {
    if (value === "change-password") {
      setModalTitle("Change Password");
      setIsModalOpen(true);
    } else {
      navigate(`/settings/${value}`);
    }
  };
  const handleChangePassword = (values) => {
    console.log(values);
  };

  const handleForgetPassword = (values) => {
    setModalTitle("Verify Email");
    console.log(values);
  };
  const handleVerifyOtp = (values) => {
    console.log(values);
    setModalTitle("Reset Password");
  };
  const settingsItem = [
    {
      title: "Personal Infomation",
      path: "personal-information",
    },
    {
      title: "Change Password",
      path: "change-password",
    },
    {
      title: "Terms & Conditions",
      path: "terms-conditions",
    },
    {
      title: "Privacy Policy",
      path: "privacy-policy",
    },
    {
      title: "About us",
      path: "about-us",
    },
  ];

  return (
    <div className="w-full pt-5 min-h-screen">
      {settingsItem.map((setting, index) => (
        <div
          key={index}
          className="h-[64px] bg-[#E9F4F3] hover:bg-[#ffece6e8] py-4 mb-4 px-6 rounded-lg flex items-center justify-between cursor-pointer transition-all"
          onClick={() => handleNavigate(setting.path)}
        >
          <h2>{setting.title}</h2>
          <FaAngleRight size={18} />
        </div>
      ))}
      <Modal
        title={null}
        open={isModalOpen}
        closeIcon={null}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        style={{
          maxWidth: 441,
        }}
        // bodyProps={{
        //   style: {
        //     backgroundColor: "red",
        //     margin: "0px"
        //   },
        // }}
        footer={[]}
      >
        {modalTitle === "Change Password" && (
          <div className="px-[24px] pb-[14px]">
            <div className="flex items-center gap-1.5 pt-[34px]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="outline-none"
              >
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[24px]">
              Your password must be 8-10 character long.
            </p>
            <Form
              form={form}
              name="dependencies"
              autoComplete="off"
              // style={{
              //   maxWidth: 600,
              //   border: "4px solid red",
              // }}
              requiredMark={false}
              layout="vertical"
              onFinish={handleChangePassword}
            >
              <Form.Item
                label={<p className="pb-1">Enter old password</p>}
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<MdLockOutline className="mr-2" />}
                  style={{
                    backgroundColor: "#E9F4F3",
                  }}
                  className="p-4 rounded-lg h-[56px]  placeholder:text-[#999999]"
                  placeholder="Enter old Password"
                />
              </Form.Item>
              <Form.Item
                label={<p className="pb-1">Enter new password</p>}
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<MdLockOutline className="mr-2" />}
                  style={{
                    backgroundColor: "#E9F4F3",
                  }}
                  className="rounded-lg h-[56px]  placeholder:text-[#999999]"
                  placeholder="Set new password"
                />
              </Form.Item>
              <Form.Item
                label={<p className="pb-1">Re-enter new password</p>}
                name="reenterPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<MdLockOutline className="mr-2" />}
                  style={{
                    backgroundColor: "#E9F4F3",
                  }}
                  className="p-4 rounded-lg h-[56px]  placeholder:text-[#999999]"
                  placeholder="Re-enter your password"
                />
              </Form.Item>
              <button
                style={{
                  color: "#1F8D84",
                }}
                type="link"
                className="text-[16px] -mt-3 mb-3 outline-none text-[#1F8D84]"
                onClick={() => navigate("/auth/forgot-password")}
              >
                Forget Password?
              </button>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#1F8D84",
                    color: "#fff",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
                >
                  Change Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        {modalTitle === "Forget Password" && (
          <div className="px-[24px] pb-[14px]">
            <div className="flex items-center gap-1.5 pt-[34px]">
              <button
                onClick={() => setModalTitle("Change Password")}
                className="outline-none"
              >
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[20px]">
              Please enter your email address to reset your password.
            </p>
            <Form
              form={form}
              onFinish={handleForgetPassword}
              autoComplete="off"
              layout="vertical"
              requiredMark={false}
              className="space-y-8 fit-content object-contain"
            >
              <Form.Item
                label={<p className="py-1">Enter your email</p>}
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  prefix={<MdOutlineEmail className="mr-2" />}
                  style={{
                    backgroundColor: "#E9F4F3",
                  }}
                  className="p-4 rounded-lg h-[56px]  placeholder:text-[#999999]"
                  placeholder="Enter your email"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#1F8D84",
                    color: "#fff",
                    height: "56 px",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px] text-[18px] font-medium"
                >
                  Sent OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        {modalTitle === "Verify Email" && (
          <div className="px-[24px] pb-[14px]">
            <div className="flex items-center gap-1.5 pt-[34px]">
              <button onClick={() => setModalTitle("Forget Password")}>
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[24px]">
              Please enter the otp we have sent you in your email.
            </p>
            <Form
              form={form}
              autoComplete="off"
              layout="vertical"
              className="space-y-4"
              onFinish={handleVerifyOtp}
            >
              <div className="">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "55px",
                    width: "40px",
                    margin: "auto",
                    // background: "#FFF3E6",
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
              <div className="flex justify-between items-center">
                <p>Didn’t receive the code?</p>
                <button
                  style={{
                    color: "#1F8D84",
                  }}
                  type="button"
                  className="text-[16px] outline-none text-[#1F8D84] hover:text-[#1f6e8d]"
                  // onClick={() => setModalTitle("Forget Password")}
                >
                  Resend
                </button>
              </div>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#1F8D84",
                    color: "#fff",
                    height: "56 px",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px] text-[18px] font-medium"
                >
                  Verify Email
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        {modalTitle === "Reset Password" && (
          <div className="px-[24px] pb-[14px]">
            <div className="flex items-center gap-1.5 pt-[34px]">
              <button onClick={() => setModalTitle("Verify Email")}>
                <LiaArrowLeftSolid size={26} />
              </button>
              <h6 className="text-2xl font-medium">{modalTitle}</h6>
            </div>
            <p className="text-[16px] my-[24px]">
              Your password must be 8-10 character long.
            </p>
            <Form
              form={form}
              name="dependencies"
              autoComplete="off"
              // style={{
              //   maxWidth: 600,
              //   border: "4px solid red",
              // }}
              requiredMark={false}
              layout="vertical"
              className="space-y-6 fit-content object-contain"
              onFinish={handleChangePassword}
            >
              <Form.Item
                label={<p className="pb-1">Enter new password</p>}
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<MdLockOutline className="mr-2" />}
                  style={{
                    backgroundColor: "#E9F4F3",
                  }}
                  className="rounded-lg h-[56px]  placeholder:text-[#999999]"
                  placeholder="Set new password"
                />
              </Form.Item>
              <Form.Item
                label={<p className="pb-1">Re-enter new password</p>}
                name="reenterPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                    message: "Please Input Your Password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<MdLockOutline className="mr-2" />}
                  style={{
                    backgroundColor: "#E9F4F3",
                  }}
                  className="p-4 rounded-lg h-[56px]  placeholder:text-[#999999]"
                  placeholder="Re-enter your password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#1F8D84",
                    color: "#fff",
                  }}
                  htmlType="submit"
                  className="w-full h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
                >
                  Reset Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Settings;
