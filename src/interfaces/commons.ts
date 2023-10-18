import { MouseEventHandler } from "react";

export interface ActionButton {
  hide?: boolean;
  label: string;
  confirm?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick:
    | ((reacord?: any) => void)
    | ((reacord?: any) => Promise<void>)
    | MouseEventHandler<HTMLElement>
    | undefined;
  icon: JSX.Element;
  className?: string;
  type: "link" | "text" | "default" | "primary" | "dashed" | undefined;
}
