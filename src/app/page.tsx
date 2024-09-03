import Hero from "@/components/home/Hero";
import { FaBookReader } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbFocus2 } from "react-icons/tb";

const points = [
  {
    title: "Focused on Fundamentals",
    description:
      "We invest in companies with proven track records, strong management, and sustainable competitive advantages, regardless of industry.",
    Icon: TbFocus2,
  },
  {
    title: "Cultivating Financial Literacy",
    description:
      "Our mission extends beyond investment returns. We strive to educate and inspire Ashoka students to become financially independent individuals.",
    Icon: FaBookReader,
  },
  {
    title: "Long-Term Perspective",
    description:
      "We view investments as partnerships, seeking companies with enduring value and potential for long-term growth.",
    Icon: FaArrowTrendUp,
  },
];

export default function Home() {
  return (
    <main className="-mt-[12vh]">
      <Hero />
      <div id="start" className="min-h-screen px-8 md:max-w-[100ch] mx-auto">
        <p className="text-center mt-28 text-xl">
          Bodhi Capital: India&apos;s first undergraduate student-managed
          investment fund, empowering tomorrow&apos;s financial leaders.
        </p>

        <div className="grid' md:grid-cols-4' mt-28">
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-semibold">About Us</h3>
            <p className="mt-4 text-lg md:pr-16 lg:pr-24">
              Bodhi Capital is a student-run investment fund dedicated to the
              Indian equity markets. Our team of 4 portfolio managers, supported
              by 55 analysts, employs a rigorous fundamental analysis approach
              to identify promising investment opportunities. Supervised by AIC,
              Ashoka University&apos;s investment club, we&apos;re committed to
              fostering a culture of finance and investment within the
              university community.
            </p>

            <p className="mt-4 text-lg md:pr-16 lg:pr-24">
              AIC is a community of finance enthusiasts at Ashoka University,
              dedicated to fostering a culture of investment and financial
              literacy. We offer a range of opportunities for students to deepen
              their understanding of the investment world, including:
            </p>

            <ul className="text-lg mt-4 pl-8 md:pr-16 lg:pr-24 list-disc">
              <li>
                Speaker Sessions: Engage with industry leaders and sector
                experts through insightful speaker sessions.
              </li>
              <li>
                Industry Visits: Gain firsthand experience by visiting factories
                and other relevant sites.
              </li>
              <li>
                Knowledge Building: Participate in workshops, seminars, and
                discussions to expand your financial knowledge.
              </li>
              <li>
                Networking: Connect with like-minded individuals and build
                valuable relationships within the finance community.
              </li>
            </ul>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 child:w-full">
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
          </div> */}
        </div>

        <div className="grid md:grid-cols-3 mt-20 gap-8">
          {points.map(({ title, description, Icon }) => (
            <div key={title}>
              <div className="w-[70%] mb-8 mx-auto bg-g'ray-300 rounded-md">
                <Icon className="w-[50%] h-[50%] mx-auto my-auto" />
              </div>
              <p className="text-center mt-4 text-lg font-medium">{title}</p>
              <p className="text-center mt-1 text-gray-800">{description}</p>
            </div>
          ))}
          {/* <div>
            <div className="w-[70%] mx-augray-300 rounded-md" />
            <p className="mt-4 text-lg">Focused on Fundamentals</p>
            <p>
              We invest in companies with proven track records, strong
              management, and sustainable competitive advantages, regardless of
              industry.
            </p>
          </div>

          <div>
            <div className="w-[70%] mx-auto aspect-square bg-gray-300 rounded-md" />
            <p className="text-center mt-4 text-lg">
              ⁠Focused on Fundamentals: We invest in companies with proven track
              records, strong management, and sustainable competitive
              advantages, regardless of industry.
            </p>
          </div>

          <div>
            <div className="w-[70%] mx-auto aspect-square bg-gray-300 rounded-md" />
            <p className="text-center mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
