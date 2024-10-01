"use client";

import Link from "next/link";

import GenerateOptions from "@/ui/components/organism/GenerateOptions.organism";
import GenerateElements from "@/ui/components/organism/GenerateElements.organism";
import GenerateCanvas from "@/ui/components/organism/GenerateCanvas.organism";

import "@/ui/styles/pages/generate.page.scss";
import "@/ui/styles/components/organism/generateOptions.organism.scss";

export default function Generate() {
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
        <GenerateElements />
        <GenerateCanvas />
        <GenerateOptions />
      </section>
    </main>
  );
}
