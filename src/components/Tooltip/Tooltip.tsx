import React from "react";
import { useTooltip } from "../../hooks/useTooltip";

function Tooltip({
  bgColor,
  textColor,
  fontSize,
  style,
}: {
  bgColor: string;
  textColor: string;
  fontSize: string;
  style: {};
}) {
  const { text, x, y, isTooltipVisible } = useTooltip();
  return (
    <>
      {isTooltipVisible && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            top: y,
            left: x,
            position: "absolute",
            backgroundColor: bgColor,
            padding: "5px",
            borderRadius: "5px",
            fontSize: fontSize,
            color: textColor,
            ...style,
          }}
        >
          <div>{text}</div>
        </div>
      )}
    </>
  );
}

export default Tooltip;
