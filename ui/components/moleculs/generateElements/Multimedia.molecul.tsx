import { MEDIA_ELEMENTS } from "@/lib/constants/elements";
import { Panorama } from "@phosphor-icons/react";
import GenerateOption from "../../atoms/GenerateOption.atom";

export default function Multimedia({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <details className="images section">
      <summary className="section__title">
        Multimedia <Panorama />
      </summary>

      <article className="section__control left">
        {MEDIA_ELEMENTS.map((el) => (
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
