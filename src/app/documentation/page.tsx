import { ContentPage, contentMetadata } from "@/components/site/ContentPage";

export const metadata = contentMetadata("documentation");

export default function DocumentationPage() {
  return <ContentPage slug="documentation" />;
}
