import { MetadataRoute } from "next";

import ROUTES from "@/constants/routes";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routeUrls = Object.entries(ROUTES).map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route[1]}`,
  }));
  return [...routeUrls];
}
