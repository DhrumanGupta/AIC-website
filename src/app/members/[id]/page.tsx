import { cn } from "@/lib/cn";
import { getGoogleDriveImageLink } from "@/lib/google";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import data from "../../../../output.json";
import PitchesTable from "@/components/PitchesTable";

type Member = {
  id: string;
  name: string;
  about_me: string;
  position: string;
  linkedin: string | null;
  website: string | null;
  top_stocks: string[];
  internships: string[];
  stock_pitch: string[];
  book_review: string[];
  photo: string;
};

export async function generateStaticParams() {
  return data.map((member) => ({
    id: member.id,
  }));
}

export default async function MemberPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const member: Member | undefined = data.find((p) => p.id === params.id);

  if (!member) return <p>Member not found!</p>;

  const socials = [
    { name: "LinkedIn", url: member.linkedin },
    { name: "Website", url: member.website },
  ];
  return (
    <main className="mx-8 sm:mx-20 md:max-w-[85ch] md:mx-auto md:px-4">
      {/* Background */}
      <div className="absolute bottom-0 z-50 right-1/2 translate-x-1/2">
        <a
          href="#info"
          className="block w-8 h-8 2xl:w-12 2xl:h-12 mb-[3vh] z-50"
        >
          <Image
            src="/cdown.svg"
            alt="Caret Down"
            height={64}
            width={64}
            className="w-full h-full"
          />
        </a>
      </div>

      {/* Foreground */}
      <div className="flex flex-col md:flex-row md:justify-between mx-auto h-[85vh] mt-[10vh] w-full">
        <div className="max-h-[85vh] mx-auto md:m-0 w-[60vw] sm:w-[40vw] md:w-64 lg:w-80 flex flex-col self-end overflow-hidden rounded-t-md md:mb-8 md:rounded-md">
          <div className="relative w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image
              src={getGoogleDriveImageLink(member.photo, 720)}
              alt={`Profile picture of ${params.id}`}
              fill={true}
              className="object-cover object-top"
            />
          </div>
          {/* <Image src='/person.png' alt={`Profile picture of ${params.id}`} width={256} height={256} layout='responsive' /> */}
        </div>

        <div className="flex flex-col mx-auto w-[90vw] md:mx-0 sm:w-[60vw] lg:w-[35vw] text-center md:text-right justify-start md:mt-[7.5%] gap-1">
          <div className="border-2 border-neutral-600 md:border-0 rounded-lg md:rounded-none p-2 md:p-0">
            <p className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-black">
              {member.name}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium text-gray-800">
              {member.position}
            </p>
          </div>

          <p className="mt-8 sm:mt-4 text-base md:text-xl lg:text-lg 2xl:text-2xl text-gray-800">
            {member.about_me}
          </p>

          <div className="mt-8 flex justify-center md:justify-end gap-2 md:gap-3 lg:gap-4 2xl:gap-8 w-full">
            {socials
              .filter((social) => Boolean(social.url))
              .map((social) => (
                <SocialIcon
                  url={social.url!}
                  key={social.url!}
                  // bgColor='transparent'
                  // fgColor='black'
                  style={{ height: 48, width: 48 }}
                  target="_blank"
                  rel="noreferrer"
                ></SocialIcon>
              ))}
          </div>
        </div>
      </div>

      <div id="info" className="pt-24 w-full">
        <div className="grid md:grid-cols-2">
          <div>
            <p className="text-xl md:text-2xl font-medium">My Watchlist 📈</p>
            <ul className="mt-2 child:mt-1 md:child:text-lg">
              {member.top_stocks.map((stock) => (
                <li key={stock}>{stock}</li>
              ))}
            </ul>
          </div>

          <div className="mt-14 md:mt-0">
            <p className="text-xl md:text-2xl text-right font-medium">
              📚 Books I&apos;ve Reviewed
            </p>
            <ul className="mt-2 child:mt-1 child:text-right md:child:text-lg">
              {member.book_review.map((stock) => (
                <li key={stock}>{stock}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-medium text-xl md:text-2xl mt-12 md:mt-16">
          Pitches
        </p>

        {/* <div className="border-2 mt-2 child:flex child:child:p-1">
          <div className="bg-gray-100 child:font-medium">
            <p className="flex-grow">Stock Name</p>
            <p className="w-24 border-l-2">Decision</p>
          </div>
          {member.stock_pitch.map((pitch, i) => (
            <div
              className={cn(i % 2 == 1 ? "bg-gray-100" : "bg-white")}
              key={pitch}
            >
              <p className="flex-grow">{pitch}</p>
              <p className="w-24 border-l-2">Yes</p>
            </div>
          ))}
        </div> */}

        <PitchesTable
          pitches={member.stock_pitch.map((stock) => ({ name: stock }))}
        />
      </div>
    </main>
  );
}
