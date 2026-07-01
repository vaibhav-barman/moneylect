import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  title: string;
  description: string;
  category: string;
  slug: string;
  publishedAt: string;
  author: string;
};

function walk(dir: string): string[] {
  let files: string[] = [];

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

export function getAllArticles() {
  const files = walk(contentDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(file, "utf8");

      const { data } = matter(source);

      return data as ArticleMeta;
    });
}