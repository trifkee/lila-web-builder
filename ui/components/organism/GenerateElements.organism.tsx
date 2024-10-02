"use client";

import GenerateElementsOptions from "../moleculs/GenerateElementsOptions.molecul";
import GenerateAdvanceOptions from "../moleculs/GenerateAdvanceOptions.molecul";

import "@/ui/styles/components/atoms/mainOption.atom.scss";
import "@/ui/styles/components/organism/generateElements.organism.scss";

export default function GenerateElements({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <article className="navigation left">
      <GenerateAdvanceOptions />
      <GenerateElementsOptions handleAddElement={handleAddElement} />
    </article>
  );
}
