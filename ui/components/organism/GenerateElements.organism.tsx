"use client";

import {
  BoundingBox,
  CodeBlock,
  DiamondsFour,
  File,
  Keyboard,
  ListBullets,
  Panorama,
  Table,
  TextT,
} from "@phosphor-icons/react";

import "@/ui/styles/components/organism/generateElements.organism.scss";

export default function GenerateElements({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <article className="navigation left">
      <div className="main">
        <MainOption tooltip="Elements" icon={<CodeBlock />} />
        <MainOption tooltip="Pages" icon={<File />} />
        <MainOption tooltip="Element List" icon={<ListBullets />} />
        <MainOption tooltip="Variables" icon={<DiamondsFour />} />
      </div>
      <GenerateElementsOptions handleAddElement={handleAddElement} />
    </article>
  );
}

import "@/ui/styles/components/atoms/mainOption.atom.scss";

export function MainOption({
  tooltip,
  icon,
}: {
  tooltip: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="main-option">
      <p className="main-option__tooltip">{tooltip}</p>
      {icon}
    </div>
  );
}

import "@/ui/styles/components/moleculs/generateElementsOptions.molecul.scss";
import {
  FORM_ELEMENTS,
  MEDIA_ELEMENTS,
  SECTIONS,
  TABLE_ELEMENTS,
  TEXT,
} from "@/lib/constants/elements";

export function GenerateElementsOptions({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <div className="secondary">
      <p className="secondary__title">Elements</p>

      <div className="options">
        {/* Sections */}
        <details className="sections section">
          <summary className="section__title">
            Sections <BoundingBox />
          </summary>

          <article className="section__control left">
            {SECTIONS.map((el) => (
              <Option el={el} handleAddElement={handleAddElement} />
            ))}
          </article>
        </details>

        {/* text */}
        <details className="text section">
          <summary className="section__title">
            Text <TextT />
          </summary>

          <article className="section__control left">
            {TEXT.map((el) => (
              <Option el={el} handleAddElement={handleAddElement} />
            ))}
          </article>
        </details>

        {/* images */}
        <details className="images section">
          <summary className="section__title">
            Multimedia <Panorama />
          </summary>

          <article className="section__control left">
            {MEDIA_ELEMENTS.map((el) => (
              <Option el={el} handleAddElement={handleAddElement} />
            ))}
          </article>
        </details>

        {/* forms */}
        <details className="forms section">
          <summary className="section__title">
            Forms <Keyboard />
          </summary>

          <article className="section__control left">
            {FORM_ELEMENTS.map((el) => (
              <Option el={el} handleAddElement={handleAddElement} />
            ))}
          </article>
        </details>

        {/* table */}
        <details className="table section">
          <summary className="section__title">
            Table <Table />
          </summary>

          <article className="section__control left">
            {TABLE_ELEMENTS.map((el) => (
              <Option el={el} handleAddElement={handleAddElement} />
            ))}
          </article>
        </details>
      </div>
    </div>
  );
}
export const Option = ({
  el,
  handleAddElement,
}: {
  el: any;
  handleAddElement: CallableFunction;
}) => {
  return (
    <p className="option" onClick={(e) => handleAddElement(e, el.element)}>
      {el.name}
    </p>
  );
};
