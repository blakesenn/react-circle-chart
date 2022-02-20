import React from "react";
import { storiesOf } from "@storybook/react";
import { DonutChart } from "../components/Charts/Donut";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "DonutChart",
  component: DonutChart,
  argTypes: {
    items: {
      control: "array",
      defaultValue: [
        { value: 25, label: "Stocks" },
        { value: 5, label: "Cash" },
        { value: 25, label: "Crypto" },
      ],
    },
    roundedCaps: {
      control: "boolean",
      defaultValue: true,
    },
    size: { control: "number", defaultValue: 400 },
    trackWidth: {
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    trackColor: {
      control: "color",
      defaultValue: "#141517",
    },
    showTotal: {
      control: "boolean",
      defaultValue: true,
    },
    totalFontSize: {
      control: "text",
      defaultValue: "40px",
    },
    totalTextColor: {
      control: "color",
      defaultValue: "black",
    },
    tooltipColor: {
      control: "color",
      defaultValue: "white",
    },
    backgroundTooltipColor: {
      control: "color",
      defaultValue: "#023047",
    },
    tooltipFontSize: {
      control: "text",
      defaultValue: "32px",
    },
    tooltipSx: {
      control: "object",
      defaultValue: {
        fontFamily: "monospace",
      },
    },
    totalSx: {
      control: "object",
      defaultValue: {
        fontFamily: "monospace",
        fontSize: "75px",
      },
    },
  },
};

export const Donut = (args) => <DonutChart {...args} />;
