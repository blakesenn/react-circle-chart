import React from "react";
import { storiesOf } from "@storybook/react";
import { DonutChart } from "../components/Charts";

const stories = storiesOf("Charts", module);

stories.add("DonutChart", () => {
  return (
    <div>
      <DonutChart
        totalSx={{
          fontFamily: "monospace",
          fontSize: "100px",
        }}
        tooltipSx={{
          fontFamily: "monospace",
          fontSize: "50px",
          backgroundColor: "#023047",
          color: "white",
        }}
        size={500}
      />
    </div>
  );
});
