import type { Metadata } from "next";
import { StitchView } from "@/components/layout/StitchView";
import { readDesign } from "@/lib/design";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return <StitchView html={readDesign("services")} />;
}
