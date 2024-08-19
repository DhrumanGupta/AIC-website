// import Image from "next/image";

import { getPostBySlug } from "@/lib/mdx";
import { redirect } from "next/navigation";

// type Newsletter = {
//   id: string;
//   image: string;
//   date: string;
//   title: string;
//   content: string;
// };

// export default function NewsletterPage({ params }: { params: { id: string } }) {
//   const newsletter: Newsletter | undefined = data.find(
//     (n) => n.id === params.id
//   );

//   if (!newsletter) return <p>Newsletter not found!</p>;

//   return (
//     <div>
//       <div className="text-center mt-10">
//         <h1 className="text-3xl font-bold">{newsletter.title}</h1>
//         <p className="text-sm text-gray-600">{newsletter.date}</p>
//       </div>

//       <div className="flex flex-col items-center mt-6">
//         <div className="w-full max-w-4xl">
//           {/* Assuming you want to maintain the aspect ratio of the image */}
//           <Image
//             src={newsletter.image}
//             alt={newsletter.title}
//             width={800} // You might want to dynamically set these based on the image's actual dimensions
//             height={450}
//             layout="responsive"
//             objectFit="contain"
//             className="rounded-md"
//           />
//         </div>

//         <div className="w-full max-w-4xl mt-4 px-2">
//           <p className="text-lg text-gray-800">{newsletter.content}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

type TNewsletterMeta = {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
  image: string;
};

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug<TNewsletterMeta>(
    slug,
    "newsletters"
  );
  return { meta, content };
};

const Page = async ({ params }: { params: any }) => {
  const { meta, content } = await getPageContent(params.slug);

  // const jsonLd = {
  //   "@type": "BlogPosting",
  //   name: "Rushil Gupta",
  //   mainEntityOfPage: {
  //     "@type": "WebPage",
  //     "@id": `${baseUrl}/blogs/${params.slug}`,
  //   },
  //   author: {
  //     "@type": "Person",
  //     name: "Rushil Gupta",
  //     url: baseUrl,
  //   },
  //   description: meta.description,
  //   headline: meta.title,
  //   datePublished: new Date(meta.publishDate),
  //   url: `/blogs/${params.slug}`,
  //   keywords: meta.keywords,
  //   image: meta.image,
  // };

  if (!content || !meta) {
    redirect("/newsletters");
  }

  return (
    <section className="mx-auto max-w-[70ch]">
      {/* <SchemaData data={jsonLd} /> */}
      <article className="prose prose-base prose-hr:my-8 prose-p:text-lg prose-li:text-lg max-w-[70ch] lg:prose-xl prose-h1:text-3xl prose-h2:text-xl prose-headings:font-semibold prose-headings:text-gray-700 prose-p:leading-7 prose-p:font-[300] prose-li:font-[300]">
        <h1 className="!mb-0">{meta.title}</h1>

        <p className="!mt-1 font-light text-[1.1rem] text-gray-500">
          Personal finance, investment philosophies and fun facts - all without
          the jargon.
        </p>

        <hr className="!mb-4" />
        <div className="flex">
          <button className="!m-0 !ml-auto text-sm rounded-full border-gray-300 text-gray-400 border-[1px] py-2 px-4">
            Share
          </button>
        </div>
        <hr className="!mt-4" />

        {/* <div className="mx-auto w-[90%] aspect-video relative rounded-md overflow-hidden">
          <Image
            src={meta.image}
            className="object-cover"
            alt="Image"
            fill={true}
          />
        </div> */}
        {content}
      </article>
    </section>
  );
};

export default Page;
