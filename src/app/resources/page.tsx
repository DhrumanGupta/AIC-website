import Pitches from "./Pitches";

export const revalidate = 1800; // Revalidate every 30 minutes

export default async function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Resources</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        At AIC, we curate valuable resources to foster financial literacy.
        Explore our collection of pitch decks, research reports, and educational
        materials.
      </p>
      <Pitches />
    </div>
  );
}
