import { SECTIONS_ELEMENTS } from "@/lib/constants/elements";
import GenerateOption from "../../atoms/GenerateOption.atom";
import { BoundingBox } from "@phosphor-icons/react";

export default function Sections({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <details className="sections section">
      <summary className="section__title">
        Sections <BoundingBox />
      </summary>

      <article className="section__control left">
        {SECTIONS_ELEMENTS.map((el) => (
          <GenerateOption
            el={el}
            key={el.id}
            handleAddElement={handleAddElement}
          />
        ))}
      </article>
    </details>
  );
}
