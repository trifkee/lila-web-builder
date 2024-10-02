import { FORM_ELEMENTS } from "@/lib/constants/elements";
import { Keyboard } from "@phosphor-icons/react";
import GenerateOption from "../../atoms/GenerateOption.atom";

export default function Forms({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <details className="forms section">
      <summary className="section__title">
        Forms <Keyboard />
      </summary>

      <article className="section__control left">
        {FORM_ELEMENTS.map((el) => (
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
