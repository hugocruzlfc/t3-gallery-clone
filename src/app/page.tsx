import Image from "next/image";
import { mockImagesURL } from "../lib/mock-images";
import { db } from "@/server/db";

const mockImages = mockImagesURL.map((url, id) => ({
  id,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.name}</h2>
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id}>
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-60 w-full rounded-lg object-cover"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
