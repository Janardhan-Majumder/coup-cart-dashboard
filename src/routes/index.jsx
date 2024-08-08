import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Auth from "../layouts/Auth/Auth";
import SignIn from "../pages/Auth/SignIn";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import ResetPassword from "../pages/Auth/ResetPassword";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Earnings from "../pages/Main/Earnings/Earnings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
            {
              path: "/earnings",
              element: <Earnings />,
            },
      //       {
      //         path: "/users",
      //         element: <AllUser/>,
      //       },
      //       {
      //         path: "/chats",
      //         element: <ChatList/>,
      //       },
      //       {
      //         path: "/chats/:chatId",
      //         element: <SinglePersonChatDetails/>,
      //       },
      //       {
      //         path: "/chats/edit-chat/:id",
      //         element: <EditChatCommunity />,
      //       },
      //       {
      //         path: "/chats/add-chat",
      //         element: <CreateChatCommunity />,
      //       },
      //       {
      //         path: "/subscribers",
      //         element: <Subscribers/>,
      //       },
      //       {
      //         path: "/subscriptions",
      //         element: <Subscription/>,
      //       },
      //       {
      //         path: "/subscription/add-subscription",
      //         element: <AddSubscription/>,
      //       },
      //       {
      //         path: "/subscriptions/edit-subscription/:id",
      //         element: <EditSubscription/>,
      //       },
      //       {
      //         path: "/profile-information",
      //         element: <ProfileInformation/>,
      //       },
      //       {
      //         path: "/edit-profile/:id",
      //         element: <EditProfileInformation/>,
      //       },
      //       {
      //         path: "/notification",
      //         element: <Notification/>,
      //       },
      //       {
      //         path: "/settings",
      //         element: <Settings/>,
      //       },
      //       {
      //         path: "/settings/privacy-policy",
      //         element: <PrivacyPolicy/>,
      //       },
      //       {
      //         path: "/settings/edit-privacy-policy",
      //         element: <EditPrivacyPolicy />,
      //       },
      //       {
      //         path: "/settings/terms-conditions",
      //         element: <TermsAndConditions/>,
      //       },
      //       {
      //         path: "/settings/edit-terms-conditions",
      //         element: <EditTermsAndCondition/>,
      //       },
      //       {
      //         path: "/settings/about-us",
      //         element: <AboutUs/>,
      //       },
      //       {
      //         path: "/settings/edit-about-us",
      //         element: <EditAboutUs/>,
      //       },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <SignIn />,
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    //   element: <NotFound />,
  },
]);

export default router;
