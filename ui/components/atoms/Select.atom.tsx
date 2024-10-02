"use client";

import { ChangeEventHandler } from "react";

import "@/ui/styles/components/atoms/select.atom.scss";

type SelectType = {
  options: any[];
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function Select({
  defaultValue,
  onChange,
  options,
}: SelectType) {
  return (
    <select className="select" onChange={onChange}>
      {options.map((option, i) => (
        <option
          key={i}
          selected={option.value === defaultValue}
          value={option?.value ?? option}
        >
          {option.title}
        </option>
      ))}
    </select>
  );
}
