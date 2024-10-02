"use client";

import { useRef } from "react";
import useGenerator from "@/ui/hooks/useGenerate.hook";

import GenerateOptions from "@/ui/components/organism/GenerateOptions.organism";
import GenerateElements from "@/ui/components/organism/GenerateElements.organism";
import GenerateCanvas from "@/ui/components/organism/GenerateCanvas.organism";

export default function GenerateBody() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const {
    selectedElement,
    elementStyles,
    handleAddElement,
    handleChangeStyle,
  } = useGenerator(iframeRef);

  return (
    <section className="generate__main">
      <GenerateElements handleAddElement={handleAddElement} />
      <GenerateCanvas iframeRef={iframeRef} />
      <GenerateOptions
        handleChangeStyle={handleChangeStyle}
        elementStyles={elementStyles}
        selectedElement={selectedElement}
      />
    </section>
  );
}
