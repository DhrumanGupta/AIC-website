import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div id="start" className="h-screen px-8 md:max-w-[125ch] mx-auto">
        <p className="text-center mt-28 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid md:grid-cols-4 mt-28">
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-3xl font-semibold">About Us</h3>
            <p className="mt-4 text-xl md:pr-16 lg:pr-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Ultricies mi
              eget mauris pharetra et ultrices neque ornare aenean. Eros in
              cursus turpis massa tincidunt dui ut. Nullam vehicula ipsum a
              arcu.
            </p>

            <p className="mt-4 text-xl md:pr-16 lg:pr-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Ultricies mi
              eget mauris pharetra et ultrices neque ornare aenean. Eros in
              cursus turpis massa tincidunt dui ut.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 child:w-full child:aspect-square">
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
            <div className="bg-gray-300 rounded-md" />
          </div>
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

        <div className="py-8" />
      </div>
    </main>
  );
}
