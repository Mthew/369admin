"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "../icons";

import { Button } from "antd";
import { Sidebar } from "./";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className="h-screen fixed top-0"
        style={{
          ...(visible ? { hidden: 0, width: 0 } : { opacity: 1 }),
          transition: "all 0.3s",
          overflow: "hidden",
        }}
      >
        <Sidebar />
      </div>
      <div className="md:hidden">
        <Button type="dashed" onClick={() => setVisible(!visible)}>
          <MenuIcon />
        </Button>
      </div>
    </>
  );
};

export default MobileSidebar;
