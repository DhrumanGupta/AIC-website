import PitchesTable, { Pitch } from "@/components/PitchesTable";

// 5 good indian stock tickers for a demo website
const stocks = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "A",
  "B",
  "C",
];

const pitches: Pitch[] = stocks.map((stock) => ({
  name: stock,
  decision: "Yes",
  members: [
    {
      name: "Siddhant Goenka",
      profileLink: "siddhant-goenka",
    },
    {
      name: "Krish Shah",
      profileLink: "krish-shah",
    },
    {
      name: "Kryta Sunil",
      profileLink: "krtya-sunil",
    },
  ],
}));

const ResourcesPage = () => {
  return (
    <div className="mt-8">
      {/* <h1 className='text-4xl font-bold text-center mt-8'>Resources</h1> */}
      <h2 className="text-3xl font-bold mt-8 w-full text-center mb-4">
        Newsletters
      </h2>
      {/* <div className="flex flex-col mx-4 sm:mx-12 md:max-w-[85ch] md:mx-auto md:px-4 gap-4">
        {finalNewsletters.map((newsletter: Newsletter, i: number) => (
          <div key={newsletter.id}>
            <NewsletterPreview newsletter={newsletter} />
          </div>
        ))}
        <div className="w-full flex items-center justify-center">
          <Link
            href="/newsletters"
            className="px-2 text-primary hover:brightness-90 transition-all duration-200 font-medium mx-auto"
          >
            View all newsletters
          </Link>
        </div>
      </div> */}

      {/* Horizontal line */}
      <hr className="my-12 border sm:border-[1.25px] border-neutral-200" />

      <p className={"text-3xl font-bold w-full text-center mx-auto mb-4"}>
        Pitches
      </p>
      <PitchesTable pitches={pitches} showMembers />
    </div>
  );
};

export default ResourcesPage;
