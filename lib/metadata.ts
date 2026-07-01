import { Metadata } from "next";

export function articleMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
  };
}