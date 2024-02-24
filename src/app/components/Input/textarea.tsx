import { HTMLInputTypeAttribute, useState } from "react";
import "./input.scss";
import { IFormData } from "@/interfaces/editProfile.interface";

interface IProps {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder: string;
  disabled: boolean;
  handleChange: (name: string, value: string, err?: boolean) => void;
}

export const Textarea = ({
  label,
  name,
  defaultValue,
  disabled,
  handleChange,
}: IProps): JSX.Element => {
  const [value, setValue] = useState<string>(defaultValue || "");

  const onChange = (ev: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(ev.target.value);
    handleChange(ev.target.name, ev.target.value, ev.target.value === "");
  };

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <textarea
        disabled={disabled}
        aria-label={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
