import Sections from "./generateElements/Sections.molecul";
import Texts from "./generateElements/Texts.molecul";
import Multimedia from "./generateElements/Multimedia.molecul";
import Forms from "./generateElements/Forms.molecul";
import Tables from "./generateElements/Tables.molecul";

import "@/ui/styles/components/moleculs/generateElementsOptions.molecul.scss";

export default function GenerateElementsOptions({
  handleAddElement,
}: {
  handleAddElement: CallableFunction;
}) {
  return (
    <div className="secondary">
      <p className="secondary__title">Elements</p>

      <div className="options">
        <Sections handleAddElement={handleAddElement} />
        <Texts handleAddElement={handleAddElement} />
        <Multimedia handleAddElement={handleAddElement} />
        <Forms handleAddElement={handleAddElement} />
        <Tables handleAddElement={handleAddElement} />
      </div>
    </div>
  );
}
