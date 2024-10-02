import MainOption from "../atoms/GenerateLeftNavOption.atom";

import {
  CodeBlock,
  DiamondsFour,
  File,
  ListBullets,
} from "@phosphor-icons/react";

export default function GenerateAdvanceOptions() {
  return (
    <div className="main">
      <MainOption tooltip="Elements" icon={<CodeBlock />} />
      <MainOption tooltip="Pages" icon={<File />} />
      <MainOption tooltip="Element List" icon={<ListBullets />} />
      <MainOption tooltip="Variables" icon={<DiamondsFour />} />
    </div>
  );
}
