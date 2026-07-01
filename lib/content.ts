import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content/articles");

export function getArticleSlugs() {
  return fs.readdirSync(CONTENT_PATH);
}

export function getArticleBySlug(slug: string) {
  const fullPath = path.join(
    CONTENT_PATH,
    `${slug}.mdx`
  );

  const file = fs.readFileSync(fullPath, "utf8");

  return matter(file);
}