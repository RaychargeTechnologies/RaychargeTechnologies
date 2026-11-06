import { ContentPage, contentMetadata } from "@/components/site/ContentPage";

export const metadata = contentMetadata("terms");

export default function TermsPage() {
  return <ContentPage slug="terms" />;
}
