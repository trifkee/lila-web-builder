"use client";

import { Plus } from "@phosphor-icons/react";
import InputField from "../atoms/TextInput.atom";

export default function GenerateElements() {
  return (
    <article className="navigation left">
      <p>
        sss
        <Plus />
      </p>
      <InputField
        label="W"
        name="Novi Test"
        onChange={() => null}
        type="number"
        value="valueVAlue"
        placeholder="TestPalceHolder"
      />
    </article>
  );
}
