"use client";

import "@/ui/styles/components/atoms/inputField.atom.scss";

type InputType = {
  label: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  name?: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
};

export default function InputField({
  label,
  name,
  onChange,
  value,
  disabled,
  placeholder,
  required,
  type,
}: InputType) {
  return (
    <article className={`input-field ${type}`}>
      <label htmlFor={label ?? name}>{label ?? name}</label>
      <input
        onChange={onChange}
        type={type}
        id={label ?? name}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </article>
  );
}
