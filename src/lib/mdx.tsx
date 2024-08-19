import NewsletterImage from "@/components/NewsletterImage";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

const rootDirectory = `${process.cwd()}/content`;

export async function getPostBySlug<T>(
  slug: string,
  directory: string
): Promise<{ meta?: T; content: any }> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const dirPath =
    directory.length > 0 ? path.join(rootDirectory, directory) : rootDirectory;
  const filePath = path.join(dirPath, `${realSlug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { meta: undefined, content: null };
  }

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      img: (props) => <NewsletterImage {...props} slug={realSlug} />,
    },
  });

  if (frontmatter.hasOwnProperty("published")) {
    if (!frontmatter.published) {
      return { meta: undefined, content: null };
    }
  }

  return { meta: { ...frontmatter, slug: realSlug } as T, content };
}

export const getAllPostsMeta = async (directory: string) => {
  const dir = path.join(rootDirectory, directory);
  const files = fs.readdirSync(dir);

  let posts = [];

  for (const file of files) {
    const { meta, content } = await getPostBySlug(file, directory);
    if (!content) {
      continue;
    }
    posts.push(meta);
  }

  let sortedPosts = posts.sort((p1: any, p2: any) => {
    let date1 = new Date(p1.publishDate);
    let date2 = new Date(p2.publishDate);

    return date1 < date2 ? 1 : date1 > date2 ? -1 : 0;
  });

  return sortedPosts;
};
