import type { Metadata } from "next";
import { StitchView } from "@/components/layout/StitchView";
import { readDesign } from "@/lib/design";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <StitchView html={readDesign("contact")} />;
}
