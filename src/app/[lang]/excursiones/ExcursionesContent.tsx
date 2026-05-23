"use client";

import { Language } from "@/translations";
import ServiceLandingLayout from "@/components/ServiceLandingLayout";

export default function ExcursionesContent({ lang }: { lang: Language }) {
  return <ServiceLandingLayout lang={lang} sportKey="excursiones" />;
}
