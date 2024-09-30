"use client";

import Link from "next/link";

import {
  ArrowsInLineHorizontal,
  ArrowsOutCardinal,
  MagicWand,
  Monitor,
  Palette,
  Play,
  Plus,
  RectangleDashed,
  Ruler,
  TextAa,
  VectorThree,
} from "@phosphor-icons/react";

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
        <article className="navigation left">
          <p>
            sss
            <Plus size={32} />
          </p>
        </article>
        <article className="canvas">
          <iframe src="./iframe-content.html"></iframe>
        </article>
        <GenerateOptions />
      </section>
    </main>
  );
}

export function GenerateOptions() {
  return (
    <article className="navigation right">
      {/* LAYOUT */}
      <details className="layout section">
        <summary className="section__title">
          Layout <Monitor />
        </summary>

        <article className="section__control">
          <p className="title">Display</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Direction</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Spacing</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* position */}
      <details className="position section">
        <summary className="section__title">
          Position <ArrowsOutCardinal />
        </summary>

        <article className="section__control">
          <p className="title">Position</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Coodrinates</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Z Index</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* sizing */}
      <details className="sizing section">
        <summary className="section__title">
          Sizing <Ruler />
        </summary>

        <article className="section__control">
          <p className="title">General</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* Spacing */}
      <details className="spacing section">
        <summary className="section__title">
          Spacing <ArrowsInLineHorizontal />
        </summary>

        <article className="section__control">
          <p className="title">Margin</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Padding</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* typography */}
      <details className="typography section">
        <summary className="section__title">
          Typography <TextAa />
        </summary>

        <article className="section__control">
          <p className="title">Typeface</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Color</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Font Weight</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Font Style</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Line Height</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Letter Spacing</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Text Transform</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Text Align</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Text Decoration</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">White Space</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* color */}
      <details className="color section">
        <summary className="section__title">
          Colors <Palette />
        </summary>

        <article className="section__control">
          <p className="title">Background color</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Border color</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* border */}
      <details className="border section">
        <summary className="section__title">
          Border <RectangleDashed />
        </summary>

        <article className="section__control">
          <p className="title">Type</p>
          {/* BORDER OR OUTLINE */}
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Width</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Color</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Style</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Radius</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* effects */}
      <details className="effects section">
        <summary className="section__title">
          Effects <MagicWand />
        </summary>

        <article className="section__control">
          <p className="title">Box Shadow</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Filter</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* animations */}
      <details className="animations section">
        <summary className="section__title">
          Animations <Play />
        </summary>

        <article className="section__control">
          <p className="title">Name</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Animation</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Duration</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Timing Function</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Delay</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Fill Mode</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>

      {/* transform */}
      <details className="transform section">
        <summary className="section__title">
          Transform <VectorThree />
        </summary>

        <article className="section__control">
          <p className="title">Name</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Animation</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Duration</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Timing Function</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Delay</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Fill Mode</p>
          <div className="body">
            <button>Test</button>
            <button>Test</button>
            <button>Test</button>
          </div>
        </article>
      </details>
    </article>
  );
}
