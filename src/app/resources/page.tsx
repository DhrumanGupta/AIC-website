import FileView from "@/components/FileView";
import { listR2Files } from "@/lib/r2";

export const revalidate = 3600; // Revalidate every hour

async function ResourcesPage() {
  const files = await listR2Files();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Pitches</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <FileView key={file.name} name={file.name} url={file.url} />
        ))}
      </div>
    </div>
  );
}

export default ResourcesPage;
