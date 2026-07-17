import type { Metadata } from "next";
import { site } from "@/content/site";

export function createMetadata({
  title,
  description = site.description,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title === site.name ? title : `${title} · ${site.name}`;
  const url = new URL(path, site.url).toString();

  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
