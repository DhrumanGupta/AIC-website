import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="-mt-[12vh]">
      <Hero />
      <div id="start" className="min-h-screen px-8 md:max-w-[100ch] mx-auto">
        <p className="text-center mt-28 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid' md:grid-cols-4' mt-28">
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-semibold">About Us</h3>
            <p className="mt-4 text-lg md:pr-16 lg:pr-24">
              Bodhi Capital is the premier undergraduate student managed
              investment fund of Ashoka University founded with the vision of
              producing superior risk adjusted returns through equity research
              based on fundamental analysis.
            </p>

            <p className="mt-4 text-lg md:pr-16 lg:pr-24">
              The fund is led by five portfolio managers who work with 27
              analysts to make key investment decisions based on bottom up
              fundamental analysis. It is supervised by AIC, the investments
              club of Ashoka University that consists of finance enthusiasts who
              are committed to establishing an investment ethos at Ashoka and
              regularly meet to discuss stock picks and investment philosophies.
            </p>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 child:w-full">
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
          </div> */}
        </div>

        <div className="grid md:grid-cols-3 mt-40 gap-8">
          <div>
            <div className="w-[70%] mx-auto aspect-square bg-gray-300 rounded-md" />
            <p className="text-center mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <div className="w-[70%] mx-auto aspect-square bg-gray-300 rounded-md" />
            <p className="text-center mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <div className="w-[70%] mx-auto aspect-square bg-gray-300 rounded-md" />
            <p className="text-center mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
