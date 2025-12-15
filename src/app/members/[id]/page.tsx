import PitchesTable from "@/components/PitchesTable";
import { getGoogleDriveImageLink } from "@/lib/google";
import { notFound } from "next/navigation";
import { FaGlobe, FaLinkedinIn } from "react-icons/fa";
import data from "../../../../output.json";

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

export default async function MemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const member: Member | undefined = data.find((p) => p.id === id);

  if (!member) return notFound();

  const socials = [
    { name: "LinkedIn", url: member.linkedin },
    { name: "Website", url: member.website },
  ];
  return (
    <main className="max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <section className="grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-start">
        <div className="w-full max-w-sm mx-auto md:mx-0">
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="relative w-full aspect-square">
              <img
                src={getGoogleDriveImageLink(member.photo, 720)}
                alt={`Profile picture of ${id}`}
                className="object-cover object-top w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-3xl md:text-4xl font-bold text-gray-900">
              {member.name}
            </p>
            <p className="text-xl md:text-2xl font-medium text-primary-dark">
              {member.position}
            </p>
          </div>

          <p className="text-lg text-gray-800 leading-relaxed">
            {member.about_me}
          </p>

          <div className="flex flex-wrap gap-3">
            {socials
              .filter((social) => Boolean(social.url))
              .map((social) => (
                <a
                  key={social.name}
                  href={social.url!}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-800 hover:border-primary hover:text-primary transition-colors"
                >
                  {social.name === "LinkedIn" ? (
                    <FaLinkedinIn className="w-4 h-4" />
                  ) : (
                    <FaGlobe className="w-4 h-4" />
                  )}
                  <span className="text-sm font-semibold">{social.name}</span>
                </a>
              ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
          <p className="text-xl font-semibold text-gray-900">My Watchlist 📈</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {member.top_stocks.map((stock) => (
              <span
                key={stock}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                {stock}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
          <p className="text-xl font-semibold text-gray-900">
            📚 Books I&apos;ve Reviewed
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {member.book_review.map((book) => (
              <span
                key={book}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium text-sm"
              >
                {book}
              </span>
            ))}
          </div>
        </div>
      </section>

      {member.internships && member.internships.length > 0 && (
        <section className="mt-10 rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
          <p className="text-xl font-semibold text-gray-900">Experience</p>
          <ul className="mt-3 space-y-2 text-gray-800">
            {member.internships.map((role) => (
              <li key={role} className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12">
        <p className="font-semibold text-xl md:text-2xl text-gray-900">
          Pitches
        </p>
        <div className="mt-4">
          <PitchesTable
            pitches={member.stock_pitch.map((stock) => ({ name: stock }))}
          />
        </div>
      </section>
    </main>
  );
}
