import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
  },
});

export async function listR2Files() {
  const command = new ListObjectsV2Command({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
  });

  try {
    const response = await s3Client.send(command);
    return (
      response.Contents?.map((x) => ({
        name: x.Key!,
        url: `${process.env.CLOUDFLARE_R2_URL}/${x.Key!}`,
      })) || []
    );
  } catch (error) {
    console.error("Error listing R2 files:", error);
    return [];
  }
}
