export default function GenerateOption({
  el,
  handleAddElement,
}: {
  el: any;
  handleAddElement: CallableFunction;
}) {
  return (
    <p className="option" onClick={(e) => handleAddElement(e, el.element)}>
      {el.name}
    </p>
  );
}
