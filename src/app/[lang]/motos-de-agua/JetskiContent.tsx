"use client";

import { Language } from "@/translations";
import ServiceLandingLayout from "@/components/ServiceLandingLayout";

export default function JetskiContent({ lang }: { lang: Language }) {
  return <ServiceLandingLayout lang={lang} sportKey="jetski" />;
}
