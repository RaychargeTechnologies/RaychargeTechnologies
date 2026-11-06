import type { Metadata } from "next";
import { StitchView } from "@/components/layout/StitchView";
import { readDesign } from "@/lib/design";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return <StitchView html={readDesign("solutions")} />;
}
