"use client";

import { ChangeEventHandler, MouseEventHandler } from "react";

import "@/ui/styles/components/atoms/checkbox.atom.scss";

type CheckboxType = {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Checkbox({ onChange, name, value }: CheckboxType) {
  return (
    <article className="checkbox">
      <label className="checkbox__title" htmlFor={name}>
        {value}
      </label>
      <input
        className="checkbox__box"
        type="checkbox"
        id={value}
        onChange={onChange}
        name={name}
      />
    </article>
  );
}
