import { FC } from "react";
import React from "react";

export const Button: FC<{
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ children, onClick }) => (
  <button
    style={{
      padding: 10,
      backgroundColor: "#333",
      color: "#fff",
      display: "inline-block",
      borderRadius: 4,
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
