import { File, listR2Files } from "@/lib/r2";
import PitchGrid from "./PitchGrid";

async function getFiles(): Promise<File[]> {
  return await listR2Files("pitches");
}
export default async function Pitches() {
  const files = await getFiles();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Pitches</h2>
      <PitchGrid files={files} />
    </>
  );
}
