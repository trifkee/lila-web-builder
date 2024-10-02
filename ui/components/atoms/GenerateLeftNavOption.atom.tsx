export default function MainOption({
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
