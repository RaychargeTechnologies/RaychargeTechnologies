import { ContentPage, contentMetadata } from "@/components/site/ContentPage";

export const metadata = contentMetadata("help");

export default function HelpPage() {
  return <ContentPage slug="help" />;
}
