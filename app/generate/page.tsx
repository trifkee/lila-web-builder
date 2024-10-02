import GenerateNavigation from "@/ui/components/moleculs/GenerateNavigation.molecul";
import GenerateBody from "@/ui/components/organism/GenerateBody.organism";

import "@/ui/styles/pages/generate.page.scss";
import "@/ui/styles/components/organism/generateOptions.organism.scss";

export default function Generate() {
  return (
    <main className="generate">
      <GenerateNavigation />
      <GenerateBody />
    </main>
  );
}
