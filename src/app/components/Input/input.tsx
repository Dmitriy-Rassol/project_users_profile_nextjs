"use client";

import { HTMLInputTypeAttribute, useState } from "react";
import "./input.scss";

interface IProps {
  type: HTMLInputTypeAttribute;
  label: string;
  name: string;
  defaultValue?: string;
  placeholder: string;
  disabled: boolean;
  handleChange: (name: string, value: string, err?: boolean) => void;
}

export const Input = ({
  type,
  label,
  name,
  defaultValue,
  placeholder,
  disabled,
  handleChange,
}: IProps): JSX.Element => {
  const [value, setValue] = useState<string>(defaultValue || "");

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(ev.target.value);
    handleChange(ev.target.name, ev.target.value, ev.target.value === "");
  };

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        type={type}
        required={true}
        style={value === "" ? { borderColor: "red" } : {}}
        disabled={disabled}
        aria-label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
