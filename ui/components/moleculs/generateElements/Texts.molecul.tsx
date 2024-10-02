import { TEXT_ELEMENTS } from "@/lib/constants/elements";
import { TextT } from "@phosphor-icons/react";
import GenerateOption from "../../atoms/GenerateOption.atom";

export default function Texts({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <details className="text section">
      <summary className="section__title">
        Text <TextT />
      </summary>

      <article className="section__control left">
        {TEXT_ELEMENTS.map((el) => (
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
