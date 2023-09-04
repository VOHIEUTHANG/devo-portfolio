import React from "react";
import { ConfigProvider } from "antd";

import "./global.css";

const Global = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#00b96b",
          borderRadius: 2,
          // Alias Token
          colorBgContainer: "#f6ffed"
        }
      }}>
      {children}
    </ConfigProvider>
  );
};

export default Global;
