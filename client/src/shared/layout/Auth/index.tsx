import { ModeToggle } from "@/components/mode-toggle";
import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div >
          <ModeToggle />

       <Outlet />
    </div>
  );
};

export default AuthLayout;
