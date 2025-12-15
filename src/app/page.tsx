import Hero from "@/components/home/Hero";
import Link from "next/link";
import { FaBookReader } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineUsers,
} from "react-icons/hi2";
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

const highlights = [
  {
    title: "4 Portfolio Managers",
    description: "A student-run fund dedicated to Indian equities.",
    Icon: HiOutlineUsers,
  },
  {
    title: "55 Analysts",
    description:
      "Collaborating to build conviction through fundamental research.",
    Icon: HiOutlineAcademicCap,
  },
  {
    title: "India's First Undergraduate Fund",
    description:
      "Managed by Ashoka University students with guidance from AIC.",
    Icon: HiOutlineSparkles,
  },
  {
    title: "AIC Supervision",
    description:
      "Part of Ashoka's investment club focused on finance and literacy.",
    Icon: HiOutlineGlobeAlt,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-white">
        <div id="start" className="min-h-screen">
          <section className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-6">
            <p className="text-center text-xl md:text-2xl text-gray-900">
              Bodhi Capital: India&apos;s first undergraduate student-managed
              investment fund, empowering tomorrow&apos;s financial leaders.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              {highlights.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-white shadow-sm px-4 py-5 flex flex-row gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="text-sm text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 py-16 md:py-20">
            <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  About Bodhi Capital
                </h3>
                <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                  Bodhi Capital is a student-run investment fund dedicated to
                  the Indian equity markets. Our team of 4 portfolio managers,
                  supported by 55 analysts, employs a rigorous fundamental
                  analysis approach to identify promising investment
                  opportunities. Supervised by AIC, Ashoka University&apos;s
                  investment club, we&apos;re committed to fostering a culture
                  of finance and investment within the university community.
                </p>
                <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                  AIC is a community of finance enthusiasts at Ashoka
                  University, dedicated to fostering a culture of investment and
                  financial literacy. We offer a range of opportunities for
                  students to deepen their understanding of the investment
                  world.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                  <h4 className="text-xl font-semibold text-gray-900">
                    What we focus on
                  </h4>
                  <p className="mt-3 text-gray-800">
                    We invest in companies with proven track records, strong
                    management, and sustainable competitive advantages. We view
                    investments as long-term partnerships aimed at enduring
                    value and growth.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                  <h4 className="text-xl font-semibold text-gray-900">
                    How we build the community
                  </h4>
                  <ul className="mt-3 space-y-2 text-gray-800">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Speaker Sessions: Engage with industry leaders and
                        sector experts through insightful speaker sessions.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Industry Visits: Gain firsthand experience by visiting
                        factories and other relevant sites.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Knowledge Building: Participate in workshops, seminars,
                        and discussions to expand financial knowledge.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Networking: Connect with like-minded individuals and
                        build valuable relationships within the finance
                        community.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h3 className="text-3xl font-semibold text-gray-900">
                How we operate
              </h3>
              <p className="text-gray-700 md:max-w-xl">
                A fundamentals-first, long-term approach guided by discipline,
                literacy, and community building.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-10">
              {points.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="text-gray-800 mt-2">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary via-primary-dark to-primary py-14 md:py-16">
            <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-10 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-wide text-white/80">
                  Stay involved
                </p>
                <h3 className="text-3xl font-semibold mt-2">
                  Dive deeper into Bodhi Capital
                </h3>
                <p className="mt-2 text-white/90">
                  Meet the team, explore our resources, and follow our work
                  through the newsletter.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/members"
                  className="px-4 py-2 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                >
                  Meet our team
                </Link>
                <Link
                  href="/resources"
                  className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/15 transition-colors"
                >
                  Explore resources
                </Link>
                <Link
                  href="https://ashokainvestmentsclub.substack.com/archive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/15 transition-colors"
                >
                  Read the newsletter
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
