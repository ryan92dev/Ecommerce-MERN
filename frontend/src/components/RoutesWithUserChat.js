import React from "react";
import { Outlet } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

const RoutesWithUserChat = () => {
  return (
    <div>
      <UserChatComponent />
      <Outlet />
    </div>
  );
};

export default RoutesWithUserChat;
