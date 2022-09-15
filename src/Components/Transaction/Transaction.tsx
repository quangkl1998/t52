import type { RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";
import React, { useState } from "react";

const Transaction = () => {
  const items = [
    {
      label: `Tab`,
      key: "2",

      children: `Content of tab `,
    },
    {
      label: `Tab`,
      key: "1",

      children: `Content of tab `,
    },
    {
      label: `Tab`,
      key: "3",

      children: `Content of tab `,
    },
  ];
  return (
    <div>
      {" "}
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{ height: 220 }}
        items={items}
      />
    </div>
  );
};

export default Transaction;
