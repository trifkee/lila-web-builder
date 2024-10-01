"use client";

import {
  ArrowsInLineHorizontal,
  ArrowsOutCardinal,
  Link as LinkIcon,
  MagicWand,
  Monitor,
  Palette,
  Play,
  Plus,
  RectangleDashed,
  Ruler,
  SquaresFour,
  TextAa,
  VectorThree,
} from "@phosphor-icons/react";
import { HexAlphaColorPicker } from "react-colorful";
import InputField from "../atoms/TextInput.atom";

export default function GenerateOptions({
  selectedElement,
  handleChangeStyle,
}: {
  handleChangeStyle: CallableFunction;
  selectedElement: any;
}) {
  console.log(selectedElement, "selected");

  if (!selectedElement) {
    return (
      <article className="navigation right">
        <p>Select element.</p>
      </article>
    );
  }
  return (
    <article className="navigation right">
      <p>{selectedElement.name}</p>

      {/* LAYOUT */}
      <details className="layout section">
        <summary className="section__title">
          Layout <Monitor />
        </summary>

        <article className="section__control">
          <p className="title">Display</p>
          <div className="body">
            <button
              onClick={() => (
                (selectedElement.element.style.background = "red"),
                (selectedElement.element.style.height = "300px")
              )}
            >
              Test2222
            </button>
            <button
              onClick={() => (
                (selectedElement.element.style.background = "purple"),
                (selectedElement.element.style.height = "50px")
              )}
            >
              Test 11111{" "}
            </button>
            <button>Test</button>
          </div>
        </article>

        <article className="section__control">
          <p className="title">Background Color</p>
          <div className="body">
            <HexAlphaColorPicker
              color="white"
              onChange={(e) =>
                handleChangeStyle({ propName: "background", value: e })
              }
            />
            {/* <InputField
              label="Hex Color"
              value={ }
              onChange={(e) =>
                handleChangeStyle({ propName: "background", value: e })
              }
            /> */}
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

      {/* Link */}
      <details className="link section">
        <summary className="section__title">
          Source <LinkIcon />
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
