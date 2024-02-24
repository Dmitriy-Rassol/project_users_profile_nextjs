"use client";
import React, { ReactNode } from "react";
import "./button.scss";

interface IProps {
  children: ReactNode;
  disabled: boolean;
  className?: string;
  handleClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  className,
  disabled,
  handleClick,
}: IProps): JSX.Element => {
  return (
   <div>
     <button
      onClick={handleClick}
      disabled={disabled}
      style={{display: "initial"}}
      className={`button ${className || "primary-button"}`}
    >
      {children}
    </button>
   </div>
  );
};
