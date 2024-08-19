import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";

type Newsletter = {
  slug: string;
  image: string;
  date: string;
  title: string;
  content: string;
};

const NewsletterPreview = ({
  newsletter,
  flip = false,
}: {
  newsletter: Newsletter;
  flip?: Boolean;
}) => {
  // Image on the left. Title, content, and date on the right. Clicking anywhere on the card should take the user to the newsletter page.
  return (
    <Link href={`/newsletters/${newsletter.slug}`} passHref>
      <div
        className={cn(
          "flex flex-col md:flex-row w-full cursor-pointer items-stretch border border-gray-300 rounded-md overflow-hidden",
          flip && "md:!flex-row-reverse"
        )}
      >
        <div className="relative w-full md:w-[55%] lg:w-1/2">
          <Image
            src={newsletter.image}
            alt={newsletter.title}
            layout="responsive"
            objectFit="cover"
            width={900}
            height={500}
            className={cn(!flip && "rounded-l-md", flip && "rounded-r-md")}
          />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between bg-white">
          <div>
            <h3 className="text-xl font-semibold mb-2">{newsletter.title}</h3>
            <p className="text-gray-600 line-clamp-3">{newsletter.content}</p>
          </div>
          <div className="mt-4 flex flex-row items-center gap-2">
            <CiClock2 />
            <p className="text-gray-600">{newsletter.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export type { Newsletter };
export default NewsletterPreview;
