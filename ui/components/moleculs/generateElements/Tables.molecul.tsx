import { TABLE_ELEMENTS } from "@/lib/constants/elements";
import { Table } from "@phosphor-icons/react";
import GenerateOption from "../../atoms/GenerateOption.atom";

export default function Tables({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <details className="table section">
      <summary className="section__title">
        Table <Table />
      </summary>

      <article className="section__control left">
        {TABLE_ELEMENTS.map((el) => (
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
