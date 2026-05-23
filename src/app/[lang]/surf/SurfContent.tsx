"use client";

import { Language } from "@/translations";
import ServiceLandingLayout from "@/components/ServiceLandingLayout";

export default function SurfContent({ lang }: { lang: Language }) {
  return <ServiceLandingLayout lang={lang} sportKey="surf" />;
}
