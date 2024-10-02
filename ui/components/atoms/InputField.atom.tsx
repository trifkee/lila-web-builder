"use client";

import "@/ui/styles/components/atoms/inputField.atom.scss";

type InputType = {
  label?: string | React.ReactNode;
  value: string | number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  name?: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  min?: number;
  className?: string;
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
  min,
  className,
}: InputType) {
  return (
    <article className={`input-field ${type} ${className}`}>
      <label htmlFor={typeof label === "string" ? label ?? name : ""}>
        {label ?? name}
      </label>
      <input
        min={min}
        onChange={onChange}
        type={type}
        id={typeof label === "string" ? label ?? name : ""}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </article>
  );
}
