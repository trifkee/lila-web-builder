"use client";

import "@/ui/styles/components/moleculs/aligmentBox.molecul.scss";
import {
  AlignBottom,
  AlignCenterVertical,
  AlignLeft,
  AlignRight,
  AlignTop,
} from "@phosphor-icons/react";
import { useState } from "react";

export default function AligmentBox() {
  const [selected, setSelected] = useState(4);

  const getIcon = () => {
    const size = 20;

    switch (selected) {
      case 0:
      case 1:
      case 2:
        return <AlignTop size={size} />;

      case 3:
      case 4:
      case 5:
        return <AlignCenterVertical size={size} />;

      case 6:
      case 7:
      case 8:
        return <AlignBottom size={size} />;
    }
  };

  return (
    <article className="alignment-box">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          className={`alignment-box__box ${i === selected ? "selected" : ""}`}
          onClick={() => setSelected(i)}
        >
          {selected === i ? getIcon() : "•"}
        </div>
      ))}
    </article>
  );
}
