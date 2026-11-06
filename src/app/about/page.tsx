import type { Metadata } from "next";
import { StitchView } from "@/components/layout/StitchView";
import { readDesign } from "@/lib/design";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <StitchView html={readDesign("about")} />;
}
