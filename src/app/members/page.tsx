import { Header } from "@/components/typography";
import { getGoogleDriveImageLink } from "@/lib/google";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import data from "../../../output.json";

function Page() {
  const groupedData: {
    [key: string]: (typeof data)[number][];
  } = data.reduce((x, y) => {
    // @ts-ignore
    (x[y.position] = x[y.position] || []).push(y);

    return x;
  }, {});

  return (
    <main className="mt-hero mx-8 md:max-w-[85ch] md:mx-auto">
      <Header className="mt-4 lg:text-4xl text-primary">Meet the team</Header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-20 mt-4">
        {["Portfolio Manager", "Senior Analyst", "Analyst"].map((position) => (
          <Fragment key={position}>
            {/* <Header className="mt-8 font-semibold !text-xl">{position}s</Header> */}

            {groupedData[position].map((member) => (
              <Link
                href={`/members/${member.id}`}
                legacyBehavior={true}
                key={member.id}
              >
                <div className="bg-g'ray-200 rounded-md hover:cursor-pointer">
                  <div className="aspect-square relative overflow-hidden rounded-3xl' rounded-full rounded-'b-none">
                    <img
                      src={getGoogleDriveImageLink(member.photo, 720)}
                      alt={`Profile picture of ${member.name}`}
                      className="object-cover object-top h-full w-full"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-center mt-4 text-lg text-black font-semibold">
                    {member.name}
                  </p>
                  <p className="text-center text-primary -mt-1">
                    {member.position}
                  </p>
                </div>
              </Link>
            ))}
          </Fragment>
        ))}
      </div>
    </main>
  );
}

export default Page;
