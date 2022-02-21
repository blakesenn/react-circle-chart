import React from "react";

import { DonutChart } from "../components/Charts/Donut";

import { Meta } from "@storybook/react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  Canvas,
} from "@storybook/addon-docs";

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
      description:
        "Array of Items. \nThe fields for each item are as follows\n **value:number** **label:string** **color?:string** **displayValue?:string**",
      table: {
        type: { summary: "array" },
        defaultValue: {
          summary: `[
            { value: 25, label: "Stocks" },
            { value: 5, label: "Cash" },
            { value: 25, label: "Crypto" },
          ]`,
        },
      },
      defaultValue: [
        { value: 25, label: "Stocks" },
        { value: 5, label: "Cash" },
        { value: 25, label: "Crypto" },
      ],
    },
    roundedCaps: {
      description: "Round caps on items",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
      defaultValue: true,
    },
    size: {
      control: "number",
      description: "Size of Donut Chart",
      defaultValue: 400,
      table: {
        type: { summary: "sm | md | lg | number" },
        defaultValue: { summary: "lg" },
      },
    },
    trackWidth: {
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    trackColor: {
      description: "Color of track",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#141517" },
      },
      control: "color",
      defaultValue: "#141517",
    },
    showTotal: {
      description:
        "Boolean to show or not show the total value in the center of chart",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
      defaultValue: true,
    },
    totalFontSize: {
      description: "Font size in px of the centered total text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "40px" },
      },
      control: "text",
      defaultValue: "40px",
    },
    totalTextColor: {
      description: "Text color of the total text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "black" },
      },
      control: "color",
      defaultValue: "black",
    },
    tooltipColor: {
      description: "Text color of the tooltip text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "white" },
      },
      control: "color",
      defaultValue: "white",
    },
    backgroundTooltipColor: {
      description: "Background color of the tooltip text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#023047" },
      },
      control: "color",
      defaultValue: "#023047",
    },
    tooltipFontSize: {
      description: "Font size of the tooltip text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "32px" },
      },
      control: "text",
      defaultValue: "32px",
    },
    tooltipSx: {
      description: "Style props object for the tooltip component",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
      },
      control: "object",
      defaultValue: {
        fontFamily: "monospace",
      },
    },
    totalSx: {
      description: "Style props object for the total text",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
      },
      control: "object",
      defaultValue: {
        fontFamily: "monospace",
        fontSize: "75px",
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

export const Donut = (args) => <DonutChart {...args} />;
