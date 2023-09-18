"use client";

import React from "react";
import { ConfigProvider } from "antd";
import theme from "./themeConfig";

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#52c41a",
        },
      }}
    >
      <ConfigProvider theme={theme}>{node}</ConfigProvider>
    </ConfigProvider>
  </>
);

export default withTheme;
