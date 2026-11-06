import type { Metadata } from "next";
import { StitchView } from "@/components/layout/StitchView";
import { readDesign } from "@/lib/design";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return <StitchView html={readDesign("products")} />;
}
