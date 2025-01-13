import { Header } from "@/components/typography";
import { getGoogleDriveImageLink } from "@/lib/google";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import alumniData from "../../../../alumni_data.json";

function Page() {
  // Filter for Portfolio Managers (accounting for case differences)
  const portfolioManagers = alumniData
    .filter(
      (member) =>
        member["Last Position at Bodhi Capital"].toLowerCase() ===
        "portfolio manager"
    )
    .sort((a, b) => {
      // Extract the end year from the "YYYY-YYYY" format
      const yearA = parseInt(a["Year when position was held"].split("-")[1]);
      const yearB = parseInt(b["Year when position was held"].split("-")[1]);
      // Sort by year in descending order (most recent first)
      return yearB - yearA;
    });

  return (
    <main className="mt-hero mx-8 md:max-w-[85ch] md:mx-auto">
      <Header className="my-8 lg:text-4xl text-primary">
        Former Portfolio Managers
      </Header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 mt-4">
        {portfolioManagers.map((member) => (
          <div
            key={member["Email Address"]}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-square relative overflow-hidden rounded-t-xl">
              <Image
                src={getGoogleDriveImageLink(member.Photo, 450)}
                alt={`Profile picture of ${member.Name}`}
                fill={true}
                placeholder="blur"
                blurDataURL={getGoogleDriveImageLink(member.Photo, 100)}
                className="object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <p className="text-center text-xl text-gray-800 font-semibold mb-2">
                {member.Name}
              </p>
              {/* <p className="text-center text-primary text-sm mb-1">
                Portfolio Manager
              </p> */}
              <p className="text-center text-gray-600 text-sm">
                {member["Year when position was held"]}
              </p>
              {member["LinkedIn Profile"] &&
                member["LinkedIn Profile"] !== "N/A" && (
                  <a
                    href={
                      member["LinkedIn Profile"].startsWith("http")
                        ? member["LinkedIn Profile"]
                        : `https://${member["LinkedIn Profile"]}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex justify-center items-center text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <div className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-200">
                      <FaLinkedin size={24} />
                    </div>
                  </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
