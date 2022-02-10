import React from "react";
import { useTooltip } from "../../hooks/useTooltip";

function Tooltip({
  bgColor,
  textColor,
  fontSize,
}: {
  bgColor: string;
  textColor: string;
  fontSize: string;
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
          }}
        >
          <div style={{ fontSize: fontSize, color: textColor }}>{text}</div>
        </div>
      )}
    </>
  );
}

export default Tooltip;
