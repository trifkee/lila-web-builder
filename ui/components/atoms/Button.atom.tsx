"use client";

import "@/ui/styles/components/atoms/button.atom.scss";

type ButtonType = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, type = "button" }: ButtonType) {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
}
