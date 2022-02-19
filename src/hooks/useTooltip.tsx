import React, { createContext, ReactNode } from "react";

type TooltipContextType = {
  showTool: boolean;
  setShowTool: (val: boolean) => void;
  text: string;
  setText: (val: string) => void;
  x: number;
  setX: (value: number) => void;
  y: number;
  setY: (value: number) => void;
};

const TooltipContext = createContext<TooltipContextType>(null);

export function TooltipContextProvider({ children }: { children: ReactNode }) {
  const [showTool, setShowTool] = React.useState(false);
  const [text, setText] = React.useState("");
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  return (
    <TooltipContext.Provider
      value={{ setShowTool, showTool, text, setText, x, setX, y, setY }}
    >
      {children}
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const { setShowTool, showTool, text, x, setX, y, setY, setText } =
    React.useContext(TooltipContext);

  const showTooltip = React.useCallback(
    (x: number, y: number, text: string) => {
      setX(x);
      setY(y);
      setShowTool(true);
      setText(text);
    },
    [setX, setY, setShowTool, setText]
  );

  const hideTooltip = () => {
    setShowTool(false);
  };

  return {
    showTooltip,
    hideTooltip,
    isTooltipVisible: showTool,
    x,
    y,
    text,
  };
}
