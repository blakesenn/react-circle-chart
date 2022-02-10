import React, { useEffect, useRef } from "react";
import { TooltipContextProvider, useTooltip } from "../../../hooks/useTooltip";
import Tooltip from "../../Tooltip/Tooltip";

export interface Item {
  value: number;
  label: string;
  color?: string;
  displayValue?: number | string;
}

const defaultColors = ["#4361ee", "#4cc9f0", "#4895ef", "#3f37c9"];

export type DonutChartProps = {
  items?: Item[];
  roundedCaps?: boolean;
  size?: "sm" | "md" | "lg" | number;
  trackWidth?: "sm" | "md" | "lg";
  trackColor?: string;
  showTotal?: boolean;
  totalFontSize?: string;
  totalTextColor?: string;
  showTooltipOnHover?: boolean;
  tooltipColor?: string;
  backgroundTooltipColor?: string;
  tooltipFontSize?: string;
};

export const DonutChart = ({
  items = [
    { value: 25, label: "Stocks" },
    { value: 5, label: "Cash" },
    { value: 25, label: "Crypto" },
  ],
  roundedCaps = true,
  size = "lg",
  trackWidth = "md",
  trackColor = "#141517",
  showTotal = true,
  totalTextColor = "#001219",
  totalFontSize = "60px",
  backgroundTooltipColor = "#D3D3D3",
  tooltipFontSize = "40px",
  tooltipColor = "black",
}: DonutChartProps) => {
  let currPercentTotal = 0;

  /**
   * box size of chart
   */
  let sz: string;
  let tw: string;

  switch (size) {
    case "sm":
      sz = "216";
      break;
    case "md":
      sz = "316";
      break;
    case "lg":
      sz = "400";
      break;
    default:
      sz = `${size}`;
  }

  switch (trackWidth) {
    case "sm":
      tw = "3";
      break;
    case "md":
      tw = "5";
      break;
    case "lg":
      tw = "7";
      break;
    default:
      tw = `${trackWidth}`;
  }

  return (
    <TooltipContextProvider>
      <svg width={sz} height={sz}>
        <svg viewBox="0 0 42 42">
          <circle
            cx="50%"
            cy="50%"
            r="15.91549430918954"
            fill="none"
            stroke={trackColor}
            strokeWidth={tw}
            strokeLinecap="round"
            strokeDasharray="100 0"
            strokeDashoffset="25"
          />
          {items.map((item: Item, index) => {
            const offSet = 25 - currPercentTotal;
            currPercentTotal += item.value;

            return (
              <DonutItem
                key={index}
                value={item.value}
                displayValue={
                  item.displayValue || `${item.value}% ${item.label}`
                }
                color={
                  item?.color || defaultColors[index % defaultColors.length]
                }
                trackWidth={tw}
                roundedCaps={roundedCaps}
                offSet={offSet}
              />
            );
          })}
        </svg>
        {showTotal && (
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            x="50%"
            y="50%"
            fill={totalTextColor}
            fontSize={totalFontSize}
          >
            {currPercentTotal}%
          </text>
        )}
      </svg>
      <Tooltip
        bgColor={backgroundTooltipColor}
        fontSize={tooltipFontSize}
        textColor={tooltipColor}
      />
    </TooltipContextProvider>
  );
};

const DonutItem = ({
  value,
  displayValue,
  roundedCaps,
  color,
  trackWidth,
  offSet,
}) => {
  const dashArr = (value: number): string => {
    let adjustPercent = value;
    if (roundedCaps) {
      adjustPercent = value === 100 ? value : value >= 2 ? value - 1 : 0;
    }
    return `${adjustPercent} ${100 - adjustPercent}`;
  };

  const { showTooltip, hideTooltip } = useTooltip();

  return (
    <circle
      cx="50%"
      cy="50%"
      r="15.91549430918954"
      strokeLinecap={roundedCaps ? "round" : "inherit"}
      fill="none"
      stroke={color}
      stroke-width={trackWidth}
      stroke-dasharray={dashArr(value)}
      stroke-dashoffset={offSet}
      onMouseOver={(ref) =>
        showTooltip(ref.clientX + 40, ref.clientY - 20, displayValue)
      }
      onMouseLeave={() => hideTooltip()}
      cursor="pointer"
    />
  );
};