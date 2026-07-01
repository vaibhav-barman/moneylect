import { siteConfig } from "@/data/site/site";

export function createMetadata(title: string) {
  return {
    title: `${title} | ${siteConfig.name}`,

    description: siteConfig.description,
  };
}