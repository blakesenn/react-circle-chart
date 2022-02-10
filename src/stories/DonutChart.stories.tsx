import React from "react";
import { storiesOf } from "@storybook/react";
import { DonutChart } from "../components/Charts";

const stories = storiesOf("Charts", module);

stories.add("DonutChart", () => {
  return (
    <div style={{ fontFamily: "monospace" }}>
      <DonutChart />
    </div>
  );
});
