"use client";

import Link from "next/link";

import GenerateOptions from "@/ui/components/organism/GenerateOptions.organism";
import GenerateElements from "@/ui/components/organism/GenerateElements.organism";
import GenerateCanvas from "@/ui/components/organism/GenerateCanvas.organism";

import "@/ui/styles/pages/generate.page.scss";
import "@/ui/styles/components/organism/generateOptions.organism.scss";
import { useEffect, useRef } from "react";
import useGenerator from "@/ui/hooks/useGenerate.hook";

export default function Generate() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const { handleAddElement, selectedElement, handleChangeStyle } =
    useGenerator(iframeRef);

  return (
    <main className="generate">
      <nav className="generate__navigation">
        <Link href={"/"}>
          <h1>Lila</h1>
        </Link>

        <div className="document-title">
          {true ? <p className="title">Untitled</p> : <input type="text" />}
        </div>
      </nav>

      <section className="generate__main">
        <GenerateElements handleAddElement={handleAddElement} />
        <GenerateCanvas iframeRef={iframeRef} />
        <GenerateOptions
          handleChangeStyle={handleChangeStyle}
          selectedElement={selectedElement}
        />
      </section>
    </main>
  );
}
