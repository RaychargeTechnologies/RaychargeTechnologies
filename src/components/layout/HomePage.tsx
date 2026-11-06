"use client";

import { useEffect, useState } from "react";
import { StitchView } from "@/components/layout/StitchView";
import RouteLoading from "@/components/ui/RouteLoading";

type HomePageProps = {
  desktop: string;
  mobile: string;
};

export function HomePage({ desktop, mobile }: HomePageProps) {
  const [wide, setWide] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const apply = () => setWide(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  if (wide === null) return <RouteLoading label="Loading homepage" />;
  return <StitchView html={wide ? desktop : mobile} />;
}
